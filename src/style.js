//Copyright 2020, Provecho, All rights reserved.

import { StyleSheet, Dimensions } from 'react-native';
import { sub } from 'react-native-reanimated';

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const bar_height = 90
const sub_bar_height = 32
const medium_margin = 10
const thin_margin = 4
const medium_text_size = 16
const button_height = 30

const di_post_margin = medium_margin
const tri_post_margin = thin_margin
const hashtag_post_margin = thin_margin

const yellow = '#ffcc4d'
const black = '#101112'
const dark_grey = '#333536'
const grey = '#555758'
const white = '#f0f2f3'
const light_grey = '#e0e2e3'
const pink = '#ff1177'

const top_bar_color = '#f0f2f3cc'
const bottom_bar_color = black
const header_color = dark_grey
const round_button_color = '#ffcc4d00'

const style = StyleSheet.create({
    container: {
        top: bar_height,
        height: '100%',
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    top_bar: {
        height:bar_height,
        flexDirection: 'row',
        backgroundColor: top_bar_color,
        position: 'absolute',
        width: '100%',
        borderBottomColor: '#dddfe0',
        borderBottomWidth: .3,
    },
    top_bar_button: {
        flex: 1,
        backgroundColor: '#0000',
        alignItems: 'center',
    },
    top_bar_text: {
        fontSize: 18,
        marginTop: 55,
    },
    home_top_bar_text: {
        color: header_color,
    },
    home_top_bar: {
        height:bar_height,
        flexDirection: 'row',
        backgroundColor: top_bar_color,
        position: 'absolute',
        width: '100%',
        // borderBottomColor: '#dddfe0',
        // borderBottomWidth: .3,
        justifyContent: 'center',
    },
    home_bar_button: {
        width: 100,
        backgroundColor: '#0000',
        alignItems: 'center',
    },
    filter_bar: {
        width,
        height: 50,
        backgroundColor: dark_grey,
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
    },
    search_button: {
        position: 'absolute',
        backgroundColor: '#0000',
        width: 100,
        height: '100%',
        left: 0,
        paddingTop: 45,
        paddingLeft: 30
    },
    round_button: {
        height: button_height + 6,
        width: button_height + 6,
        backgroundColor: round_button_color,
        borderRadius: 1000,
    },
    search_icon_view: {
        height: 36, 
        width: 36, 
    },
    search_bar_header: { 
        height: bar_height, 
        width,
    },
    search_bar_back: {
        position: 'absolute',
        top: 40,
        height: 32,
        width: 60,
        borderRadius: 50,
        backgroundColor: '#3b9',
        right: medium_margin,
    },
    search_bar: { 
        position: 'absolute',
        left: medium_margin,
        top: 40,
        height: sub_bar_height, 
        width: 320,
        borderRadius: 500,
        backgroundColor: light_grey,
    },
    like_icon_view: {
        marginTop: -12,
        marginLeft: -12,
        height: 45, 
        width: 45, 
    },
    comment_icon_view: {
        marginTop: -40,
        marginLeft: -40,
        height: 100, 
        width: 100, 
    },
    bottom_bar: {
        height:bar_height,
        flexDirection: 'row',
        backgroundColor: bottom_bar_color,
        width: '100%',
        borderTopColor: '#eee0',
        borderTopWidth: .3,
    },
    bottom_bar_button: {
        flex: 1,
        backgroundColor: '#0000',
        // alignItems: 'center',
        // paddingTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    icon_view: {
        height: 22, 
        width: 22, 
        marginTop: 16,
    },
    post_stream: {
        backgroundColor: white,
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        // marginTop: 90,
        // backgroundColor: '#eee',
    },
    feed_container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 60, 
    },
    search_feed_container: { 
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginTop: 120, 
    },
    post: {
        marginBottom: 210,
        paddingTop: 10,
        alignSelf: 'stretch',
        width,
        height: width*1.25,
        flex:1,
        backgroundColor: white
    },
    post_scroll: {
        position: 'absolute',
        top: 70,
        backgroundColor: white,
        width,
        height: width*1.25+80,
        flexDirection: 'row',
    },
    recipe_button: {
        backgroundColor: '#f38',
        width,
        height: width*1.25,
    },
    hashtag_recipe_button: {
        aspectRatio: 4/5,
        padding: hashtag_post_margin,
    },
    remakes_container: {
        height: width,
        width: width*1.25,
        backgroundColor: white,
        transform: [{ rotate: "90deg" }],
        position: 'absolute',
        top: width*(.125),
        left: width*(-.125),
    },
    chef_thumbnail: {
        backgroundColor: '#f32',
        marginTop: 10,
        marginLeft: 30,
        width: 60,
        height: 60,
        borderRadius: 3000,
        borderColor: yellow,
        borderWidth: 3,
    },
    chef_thumbnail_large: {
        backgroundColor: '#f32',
        marginTop: 10,
        width: 130,
        height: 130,
        borderRadius: 3000,
        borderColor: yellow,
        borderWidth: 3,
    },
    search_tab_bar: {
        height: sub_bar_height+10,
        flexDirection: 'row',
        backgroundColor: '#f98',
        position: 'absolute',
        width: '100%',
        borderBottomColor: '#dddfe0',
        borderBottomWidth: .3,
    },
    search_tab_bar_button: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',
    },
    yellow_text: {
        color: yellow
    },
    dark_text: {
        color: dark_grey
    },
    tri_post_row: {
        width,
        flex:1,
        flexDirection: 'row',
        backgroundColor: white,
        paddingLeft: tri_post_margin/2,
        paddingRight: tri_post_margin/2,
    },
    //make sure this works on otehr screen dimansions
    tri_post_column: {
        width,
        height: (width)/2,
        flexDirection: 'row',
        backgroundColor: white,
        transform: [{ rotate: "270deg" }],
        marginRight: ((width)/2)-width,
        marginTop: (width-((width)/2))/2,
    },
    tri_post: {
        margin: tri_post_margin/2,
        aspectRatio: 1/1,
        flex: 1,
        backgroundColor: white,
    },
    di_post: {
        marginLeft: di_post_margin/2,
        marginRight: di_post_margin/2,
        marginBottom: 20,
        aspectRatio: 1/1,
        flex: 1,
        backgroundColor: white,
    },
    tri_recipe_button: {
        borderRadius: 6,
    },
    chef_tab_bar: {
        height: sub_bar_height,
        flexDirection: 'row',
        backgroundColor: light_grey,
        position: 'absolute',
        width: width - medium_margin*2,
        marginLeft: medium_margin,
        // borderBottomColor: '#dddfe0',
        // borderBottomWidth: .3,
        borderRadius: 1000,
    },
    chef_tab_bar_button_focused: {
        flex: 1,
        backgroundColor: yellow,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0,
        borderColor: light_grey,
        borderRadius: 1000,

    },
    chef_tab_bar_button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    chef_tab_text: {
        color: dark_grey,
        fontSize: medium_text_size,
    },
    medium_text_size: {
        fontSize: medium_text_size,
    },
    hashtag_post: {
        width: 200,
        height: 250,
        backgroundColor: white
    },
    hashtag_stream: {
        width,
        marginBottom: 40,
    },
    hashtag_stream_top: {
        flexDirection: 'row',
        height: 30,
        marginTop: 10,
        marginBottom: 10,
    },
    chef: {
        height: 100,
        width,
        flexDirection: 'row',
        alignItems: 'center',
    },
    like_button_container: {
        position: 'absolute',
        height: 30,
        width: 60,
        top: 10,
        right: 10,
        flexDirection: 'row',
    },
    like_button: {
        height: 20,
        width: 20,
        top: 5,
        left: 5,
    },
    post_button_container: {
        position: 'absolute',
        marginTop: width*1.25+70,
        width,
        height: 80,
        flexDirection: 'row',
        backgroundColor: white,
    },
    liked_button: {
        height: 20,
        width: 20,
        top: 5,
        left: 5,
    },
    number: {
        top: 5,
        left: 10,
    },
    number_text: {
        color: dark_grey,
    },
    comment_button_container: {
        position: 'absolute',
        height: 30,
        width: 60,
        top: 10,
        right: 70,
        flexDirection: 'row',
    },
    comment_button: {
        height: 20,
        width: 20,
        top: 5,
        left: 5,
    },
    tip_button_container: {
        position: 'absolute',
        height: 30,
        width: 60,
        top: 10,
        right: 130,
        flexDirection: 'row',
    },
    tip_button: {
        backgroundColor: '#f95',
        height: 20,
        width: 20,
        top: 5,
        left: 5,
    },
    like_back_button: {
        height,
        width,
        backgroundColor: '#fff0',
        position: 'absolute',
    },
    like_modal_container: {
        flex: 1,
        backgroundColor: '#fff0',
    },
    like_modal: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: '20%',
        backgroundColor: '#fff0',
    },
    like_modal_tab_bar: {
        height:60,
        flexDirection: 'row',
        backgroundColor: '#f98',
        position: 'absolute',
        width: '100%',
        borderBottomColor: '#dddfe0',
        borderBottomWidth: .3,
    },
    like_modal_tab_bar_button: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',

    },
    follow_modal_tab_bar: {
        height:60,
        flexDirection: 'row',
        backgroundColor: '#f98',
        position: 'absolute',
        width: '100%',
        borderBottomColor: '#dddfe0',
        borderBottomWidth: .3,
    },
    follow_modal_tab_bar_button: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',

    },
    stash_button: {
        position: 'absolute',
        backgroundColor: white,
        width: 100,
        height: '100%',
        paddingTop: 25,
        paddingRight: 30,
        right: 0,
    },
    unstash_button: {
        position: 'absolute',
        backgroundColor: '#f39',
        width: 100,
        height: '100%',
        paddingTop: 25,
        paddingRight: 30,
        right: 0,
    },
    instructions_tab_bar: {
        height:60,
        flexDirection: 'row',
        backgroundColor: '#f98',
        position: 'absolute',
        width: '100%',
        borderBottomColor: '#dddfe0',
        borderBottomWidth: .3,
    },
    instructions_tab_bar_button: {
        flex: 1,
        backgroundColor: white,
        alignItems: 'center',
        justifyContent: 'center',

    },
    comment_container: {
        height: 200,
        width,
        backgroundColor: 'purple',
    },
    like_container: {
        height: 200,
        width,
        backgroundColor: 'purple',
    },
    remake_button: {
        height: 30,
        width: 100,
        borderRadius:1000,
        backgroundColor: '#ffcc4d',
    },
    header: {
        width,
        height: bar_height,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: top_bar_color,
    },
    header_text: {
        marginTop: 30,
        color: header_color,
    },
    back_button: {
        position: 'absolute',
        width: button_height,
        height: button_height,
        top: 50,
        left:30,
        backgroundColor: round_button_color,
        borderRadius: 1000,
    },
    notifications_button: {
        position: 'absolute',
        width: button_height,
        height: button_height,
        top: 50,
        right:30,
        backgroundColor: round_button_color,
        borderRadius: 1000,
    },
    wide_button: {
        height: button_height,
        paddingLeft: 9,
        paddingRight: 9,
        borderRadius: 1000,
        backgroundColor: white,
        borderColor: yellow,
        borderWidth: 3,
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    wide_button_filled: {
        height: button_height,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 1000,
        backgroundColor: yellow,
        alignItems: 'center', 
        justifyContent: 'center', 
    },
    chef_stats: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    chef_stats_button: {
        height: button_height,
        width: 120,
        backgroundColor: '#f580',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default style