export default class ApiService {
  _apiMainUrl = 'https://image.unsplash.com/example/'
  
  async apiFunction(url){
    const res = await fetch(`${this._apiMainUrl}${url}`)
    return await res.json();
  }
  async randomJokeFunction() {
    const res = await this.apiFunction(`random`);
    return await res;
  }
  async categoryJokefunction() {
    const res = await this.apiFunction('categories');
    return await res;
  }
  async selectCategoryJokeFunctio() {
    const res = await this.apiFunction('random?')
  }
}