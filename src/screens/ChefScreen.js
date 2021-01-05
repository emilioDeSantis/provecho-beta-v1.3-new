//Copyright 2020, Provecho, All rights reserved.

import React, {useEffect} from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute, useNavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Amplify from 'aws-amplify';
import { DataStore, Predicates, SortDirection } from '@aws-amplify/datastore'
import { PostType, Chef, Recipe, Post, Tip, Comment, Like, Follow, Stash } from '../models'
import ChefComp from '../components/Chef'

import awsconfig from '../aws-exports';
Amplify.configure({
    ...awsconfig,
    Analytics: {
        disabled: true,
    },
});

import { useUser, useSetUser } from '../context'

import AuthenticationScreen from './AuthenticationScreen'

import * as storage from '../functions/storage'
import * as global from '../functions/global'
import BackButton from '../components/BackButton'
import NotificationsScreen from './NotificationsScreen'
import { AuthenticationDetails } from 'amazon-cognito-identity-js';
import style from '../style'
import ChefTabBar from '../components/ChefTabBar'
import Stream from '../components/Stream'
import TriPost from '../components/TriPost'
import ChefThumbnail from '../components/ChefThumbnail';


import { v4 as uuidv4 } from 'uuid';
import Header from '../components/Header';

const Settings = ({ navigation }) => {

    const test = async () => {
        // const data = await DataStore.query(Post)
        // console.log('datastore posts... ',data);
        await DataStore.clear()
    }

    return (
        <View style={{ top: 100, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>settings</Text> 
            <BackButton/>
            <TouchableOpacity
                    style={{
                        height: 30,
                        width: 200,
                        borderRadius: 50,
                        backgroundColor: '#3b9'
                    }}
                    onPress={() => test()}
                    activeOpacity={1}
                >
                    <Text>test</Text>
                </TouchableOpacity>
            <AuthenticationScreen/>
        </View>
    )
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


const All = ({chef_id}) => {

    const fetchPosts = async (page, limit) => {
        const predicate = c => c.chefID('eq',chef_id)
        const options = {
            sort: s => s.createdAt(SortDirection.DESCENDING),
            page,
            limit,
        }
        const db_data = await DataStore.query(Post, predicate, options)
        // console.log('data... ',db_data);
        const posts = await storage.format_posts(db_data)
        const tri_posts = global.format_tri_posts(posts,true)
        return tri_posts
    }

    return (
        <View style={style.feed_container}>
            <Stream Article={TriPost} fetchArticles={fetchPosts}/>
        </View>
    );
}


const Originals = ({chef_id}) => {

    const fetchPosts = async (page, limit) => {
        const predicate = c => c.chefID('eq',chef_id).type('eq', PostType.ORIGINAL)
        const options = {
            sort: s => s.createdAt(SortDirection.DESCENDING),
            page,
            limit,
        }
        const db_data = await DataStore.query(Post, predicate, options)
        // console.log('data... ',db_data);
        const posts = await storage.format_posts(db_data)
        const tri_posts = global.format_tri_posts(posts,true)
        return tri_posts
    }

    return (
        <View style={style.feed_container}>
            <Stream Article={TriPost} fetchArticles={fetchPosts}/>
        </View>
    );
}

const StashComp = (props) => {

    const user = useUser()

    const fetchPosts = async (page, limit) => {
        const stashes = (await DataStore.query(Stash)).filter(c => c.chefID === props.chef_id)
        const post_ids = stashes.map(stash => stash.postID)
        const predicate = c => c.or(
            c => {
                post_ids.forEach(id => {
                    c = c.id("eq", id)
                })
            }
        )
        const options = {
            page,
            limit,
        }
        const db_data = await DataStore.query(Post, predicate, options)
        // console.log('data... ',db_data);
        const unformatted_posts = await storage.format_posts(db_data)
        const posts = await global.format_posts(unformatted_posts, user.user_id )
        const tri_posts = global.format_tri_posts(posts,true)
        return tri_posts
    }

    return (
        <View style={style.feed_container}>
            <Stream Article={TriPost} fetchArticles={fetchPosts} article_props={{is_tri: true}}/>
        </View>
    );
}

const ChefTabs = ({chef_id}) => (
    <Tab.Navigator tabBar={props => <ChefTabBar {...props} />} initialRouteName={'all'}>
        <Tab.Screen name="all">
            {(props) => <All {...props} chef_id={chef_id}/>}
        </Tab.Screen>
        <Tab.Screen name="originals">
            {(props) => <Originals {...props} chef_id={chef_id}/>}
        </Tab.Screen>
        <Tab.Screen name="stash" options={{title:'saved'}}>
            {(props) => <StashComp {...props} chef_id={chef_id} />}
        </Tab.Screen>
    </Tab.Navigator>
)

const ChefPannel = ({ is_profile , chef }) => {

    // console.log('chaf pannel che.... ',chef);
    const navigation = useNavigation()

    const user = useUser()

    return (
        <>
            {!is_profile && <Header header={chef.username}/>}
            {is_profile && <Header header={'profile'}/>}
            {is_profile && <TouchableOpacity
                    style={style.notifications_button}
                    onPress={() => navigation.navigate('notifications')}
                    activeOpacity={1}
                >
                    <Text style={[style.medium_text_size, style.dark_text]}>notifications</Text>
                </TouchableOpacity> }
                <View style={{ alignItems: 'center', }}>
                    <ChefThumbnail chef={chef} is_large={true}/>
                    {is_profile && <TouchableOpacity
                        style={style.wide_button_filled}
                        onPress={() => navigation.navigate('settings')}
                        activeOpacity={1}
                    >
                        <Text style={[style.medium_text_size, style.dark_text]}>edit profile</Text>
                    </TouchableOpacity> }
                    {!is_profile && !chef.is_following && <TouchableOpacity
                        style={style.wide_button}
                        onPress={async() => {
                            await global.follow(user.user_id, chef.id)
                        }}
                        activeOpacity={1}
                    >
                        <Text style={[style.medium_text_size, style.dark_text]}>follow</Text>
                    </TouchableOpacity> }
                    {!is_profile && chef.is_following && <TouchableOpacity
                        style={style.wide_button_filled}
                        onPress={async() => {
                            await global.unfollow(user.user_id, chef.id)
                        }}
                        activeOpacity={1}
                    >
                        <Text style={[style.medium_text_size, style.dark_text]}>unfollow</Text>
                    </TouchableOpacity> }
                    <View style={style.chef_stats}>
                        <TouchableOpacity
                            style={style.chef_stats_button}
                            onPress={async() => {
                                navigation.navigate('follow modal', 'followers')
                            }}
                            activeOpacity={1}
                        >
                            <Text style={[style.medium_text_size, style.dark_text]}>{chef.n_followers} followers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={style.chef_stats_button}
                            onPress={async() => {
                                navigation.navigate('follow modal', 'following')
                            }}
                            activeOpacity={1}
                        >
                            <Text style={[style.medium_text_size, style.dark_text]}>{chef.n_following} following</Text>
                        </TouchableOpacity>
                        <View style={style.chef_stats_button}>
                            <Text style={[style.medium_text_size, style.dark_text]}>{chef.n_remakes} remakes</Text>
                        </View>
                    </View>
                    <Text style={[style.medium_text_size, style.dark_text]}>{chef.biography}</Text>
                </View>
            <ChefTabs chef_id={chef.id}/>
        </>
    );
}

function ChefScreenComp({chef, is_profile}) {


    // console.log('screen comp chef...',chef);

    const navigation = useNavigation();

    if (is_profile) {
        return (
            <Stack.Navigator headerMode ={'none'} screenProps={'test'}>
                <Stack.Screen name="chef pannel">
                    {(props) => <ChefPannel {...props} is_profile={is_profile} chef={chef}/>}
                </Stack.Screen>
                <Stack.Screen name="settings" component={Settings} />
                <Stack.Screen name="notifications" component={NotificationsScreen} />
            </Stack.Navigator>
        );
    } else {
        return (
            <ChefPannel chef={chef} is_profile={is_profile}/>
        )
    }
}







const FollowTab = createBottomTabNavigator();

const FollowersTab = (props) => {

    const user = useUser()

    const fetchChefs = async (page, limit) => {
        const follows = (await DataStore.query(Follow)).filter(c => c.followingID === props.chef.id)
        console.log('follows... ', follows);
        const follower_ids = follows.map(follow => follow.followerID)
        const predicate = c => c.or(
            c => {
                follower_ids.forEach(id => {
                    c = c.id("eq", id)
                })
            }
        )
        const db_data = await DataStore.query(Chef, predicate)
        // console.log('data... ',db_data);
        const unformatted_chefs = await storage.format_chefs(db_data)
        const chefs = await global.format_chefs(unformatted_chefs, user.user_id )
        return chefs
    }

    return (
        <View style={style.feed_container}>
            <Stream Article={ChefComp} fetchArticles={fetchChefs} search={props.search}/>
        </View>
    );
}

const FollowingTab = (props) => {

    const user = useUser()

    const fetchChefs = async (page, limit) => {
        //this might be getting everything and filtering after 
        const follows = (await DataStore.query(Follow)).filter(c => c.followerID === props.chef.id)
        console.log('follows... ', follows);
        const following_ids = follows.map(follow => follow.followingID)
        const predicate = c => c.or(
            c => {
                following_ids.forEach(id => {
                    c = c.id("eq", id)
                })
            }
        )
        const db_data = await DataStore.query(Chef, predicate)
        // console.log('data... ',db_data);
        const unformatted_chefs = await storage.format_chefs(db_data)
        const chefs = await global.format_chefs(unformatted_chefs, user.user_id )
        return chefs
    }

    return (
        <View style={style.feed_container}>
            <Stream Article={ChefComp} fetchArticles={fetchChefs} search={props.search}/>
        </View>
    );
}




const FollowTabBar = ({ state, descriptors, navigation }) => {
    return (
        <View style={style.follow_modal_tab_bar}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key = {label}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={style.follow_modal_tab_bar_button}
                        activeOpacity={1}
                    >
                        <Text style={{ color: isFocused ? '#f98' : '#333536' }}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}


const FollowModal = (props) => {

    const chef = props.chef

    const navigation = useNavigation()

    const route = useRoute();

    const route_name = route.params
    return (
        <View style={style.like_modal_container}>
            <TouchableOpacity
                key = 'back to post'
                accessibilityRole="button"
                onPress={() => navigation.goBack()}
                style={style.like_back_button}
                activeOpacity={1}
            >
            </TouchableOpacity>
            <View style={style.like_modal}>
                <FollowTab.Navigator tabBar={props => <FollowTabBar {...props} />} initialRouteName={route_name}>
                    <FollowTab.Screen name="followers">
                        {(props) => <FollowersTab {...props} chef={chef}/>}
                    </FollowTab.Screen>
                    <FollowTab.Screen name="following">
                        {(props) => <FollowingTab {...props} chef={chef}/>}
                    </FollowTab.Screen>
                </FollowTab.Navigator>
            </View>
        </View>
    )
}





const ModalStack = createStackNavigator();

const ChefScreen = ({is_profile}) => {
    const user = useUser()

    const route = useRoute();

    const chef = is_profile ? user.chef : route.params.chef;

    return (
        <ModalStack.Navigator mode="modal" headerMode={'none'} transparentCard={true}>
            <ModalStack.Screen name="chef screen">
                {(props) => <ChefScreenComp {...props} chef={chef} is_profile={is_profile}/>}
            </ModalStack.Screen>
            <ModalStack.Screen name="follow modal">
                {(props) => <FollowModal {...props} chef={chef} is_profile={is_profile}/>}
            </ModalStack.Screen>
        </ModalStack.Navigator>
    )
}

export default ChefScreen;

