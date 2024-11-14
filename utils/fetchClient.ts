export const FetchClient = {
    get: async (url: string) => {
        console.log(url+`&apiKey=8ebc14a6c13b46c9a8837ae2040bb253`);
        
        const response = await fetch(url+`&apiKey=8ebc14a6c13b46c9a8837ae2040bb253`);
        const data = await response.json();
        return data;
    },
}