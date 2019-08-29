import { httpUrl } from './vars';

const resource = {
  web: {
    terms: `${httpUrl}/terms`,
  },

  api: {
    me: `${httpUrl}/users/me`,
    requestOtp: `${httpUrl}/otp/request-otp`,
    verifyOtp: `${httpUrl}/otp/verify-otp`,
    updateUserProfile: `${httpUrl}/users/update`,
    followUser: `${httpUrl}/users/follow`,
    unfollowUser: `${httpUrl}/users/unfollow`,
    getGuestUser: `${httpUrl}/users/guest`,
    getNotifications: `${httpUrl}/notifications/show`,
    markNotificationAsRead: `${httpUrl}/notifications/mark-as-read`,
    getAdsKeywords: `${httpUrl}/home/keywords`,
    setAdImpression: `${httpUrl}/ads/impression`,
    getFeeds: `${httpUrl}/posts/feeds`,
    getPosts: `${httpUrl}/posts/list`,

    getCountries: `${httpUrl}/location/countries`,
    getCities: `${httpUrl}/location/cities`,

    getLotteries: `${httpUrl}/lotteries/get`,
    withdrawAmount: `${httpUrl}/lotteries/withdraw`,
    getLotteryWinners: `${httpUrl}/lotteries/winners`,
    getLotteryHistory: `${httpUrl}/lotteries/history`,
    getProfessions: `${httpUrl}/home/professions`,
    updateProfile: `${httpUrl}/users/update`,
    uploadAvatar: `${httpUrl}/users/avatar/upload`,
    getPostDetail: `${httpUrl}/posts/detail`,
    createPost: `${httpUrl}/posts/create`,
    deletePost: `${httpUrl}/posts/delete`,
    editPost: `${httpUrl}/posts/edit`,
    toggleFavorite: `${httpUrl}/posts/like`,
    redeemPoints: `${httpUrl}/posts/redeem`,
    getWalletHistory: `${httpUrl}/timer/points`,
    getTimerHistory: `${httpUrl}/timer/minutes`,
    getRankings: `${httpUrl}/timer/rankings`,
    getWinners: `${httpUrl}/timer/winners`,
    setTimer: `${httpUrl}/timer/set`,
    getQuotes: `${httpUrl}/home/quotes`,
    createGroup: `${httpUrl}/groups/create`,
    editGroup: `${httpUrl}/groups/edit`,
    exitGroup: `${httpUrl}/groups/exit`,
    deleteGroup: `${httpUrl}/groups/delete`,
    addParticipants: `${httpUrl}/groups/add-participants`,
    removeParticipants: `${httpUrl}/groups/remove-participants`,
    getGroups: `${httpUrl}/groups/get`,
    uploadGroupImage: `${httpUrl}/groups/image/upload`,
    uploadPostImage: `${httpUrl}/posts/image/upload`,
    syncContacts: `${httpUrl}/groups/sync-contacts`,
    notifyError: `${httpUrl}/error/notify`,
  },
};

const { api, web } = resource;

export { web, api };
