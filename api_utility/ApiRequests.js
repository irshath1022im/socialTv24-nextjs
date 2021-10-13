import axios from "axios";


// console.log(process.env.API_SERVER)


export const getTopNews = async () => {
    
    const topNewsUrl = `${process.env.NEXT_PUBLIC_API_SERVER}/topNews`;
    const topNewsResult = await axios.get(topNewsUrl)
    const topNewsResultResponse = await topNewsResult.data

    return topNewsResultResponse;
}


export const getRecentPosts = async (url) => {
    const resentPostsResult = await axios.get(url)
    const resentPostsResponse = await resentPostsResult.data

    // console.log(resentPostsResponse)
    return resentPostsResponse;
}

export const getPost = async (postId) => {
    const url = `${process.env.NEXT_PUBLIC_API_SERVER}/posts/${postId}`;
    const result = await axios.get(url)
    const response = await result.data.data


    return response;
}


export const getRelativePosts = async (id) => {
    const url = `${process.env.NEXT_PUBLIC_API_SERVER}/posts/subCategoryId/${id}`;
    const result = await axios.get(url)
    const relativePosts = await result.data.data

    return relativePosts;
}

export const getLiveVideo = async () => {
    const url = `${process.env.NEXT_PUBLIC_API_SERVER}/getLiveVideos`;
    const result = await axios.get(url)
    const liveVideos = await result.data

    return liveVideos;
}

