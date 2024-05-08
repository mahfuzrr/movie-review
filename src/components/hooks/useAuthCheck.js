export default function useAuthCheck() {
    const localAuth = localStorage?.getItem('movie-review-auth');
    const result = JSON.parse(localAuth);
    if (result?.email) {
        return true;
    }
    return false;
}
