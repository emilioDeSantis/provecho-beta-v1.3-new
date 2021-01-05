//Copyright 2020, Provecho, All rights reserved.

import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, Button, FlatList, SectionList } from 'react-native';

import { useUser, useSetUser } from '../context'

function useArticles(fetchArticles) {
    const user = useUser()
    const [page, setPage] = useState(0);
    const [shouldFetch, setShouldFetch] = useState(true);
    const [articles, setArticles] = useState([]);
  
    const fetchMore = useCallback(() => setShouldFetch(true), []);
  
    useEffect(
        () => {
            if (!shouldFetch) {
                return;
            }
    
            const fetch = async () => {
                const newArticles = await fetchArticles(page, 6, user.user_id);
                // console.log('areticlkes... ',newArticles);
                setShouldFetch(false);
                setArticles(oldArticles => [...oldArticles, ...newArticles]);
                setPage(page + 1);
            };
    
            fetch();
        },
        [page, shouldFetch],
    );
  
    return [articles, fetchMore, setArticles, setPage];
}

const Stream = (props) => {

    const user = useUser()

    const [articles, fetchMore, setArticles, setPage] = useArticles(props.fetchArticles)

    // console.log('articles.. ', articles);

    useEffect(() => {
        setArticles([])
        setPage(1)
        fetchMore()
    },[props.search])

    const renderItem = ({ item, index }) => {
        return (
            props.Article(item, user, props.is_rotated, props.article_props)
        );
    };

    return (
        <View style={{ flex: 1 , }}>
            <FlatList
                horizontal={props.horizontal}
                // extraData={selected}
                data={articles}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.key}
                onEndReachedThreshold={0.9}
                onEndReached={fetchMore}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator ={false}
            />
        </View>
    )
}
//adda error handleing when u get to end or ot doesnt load

export default Stream;