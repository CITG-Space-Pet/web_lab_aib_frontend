const getUrl = (id) => {
  const images = [
    "https://i1.sndcdn.com/artworks-000075106860-b5xixu-t500x500.jpg", 
    "https://i1.sndcdn.com/artworks-000142575306-c6xz9x-t500x500.jpg", 
    "https://i1.sndcdn.com/artworks-000081842897-yz5w7v-t500x500.jpg", 
    "https://i1.sndcdn.com/artworks-000424467243-5u5aqk-t500x500.jpg", 
    "https://i1.sndcdn.com/artworks-000660165334-yfbg2c-t500x500.jpg", 
    "https://static.wikia.nocookie.net/65045880-8c11-44f0-9792-f539e583ce37", 
    "https://sun9-62.userapi.com/impf/c624920/v624920751/481e4/7TVxl3C_ijM.jpg?size=545x604&quality=96&sign=9c4f6c770dea4d47c6f21188588cf11e&type=album", 
    "https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/500x659/products/227933/316421/apinylcfl__22538.1520004553.jpg?c=2", 
    "https://sun9-31.userapi.com/impg/GmX6-et3jtkLLEXuhdM6aGPSH9jFliUx0aut3w/HiPdpjTmckk.jpg?size=500x500&quality=96&sign=fadcb8ac7a3e4afb8b2ebbe59315f78c&c_uniq_tag=tMQpTpYRr1xXpOc9cZRy4T7Yx7lH93jmqnBg5hN0QwU&type=album", 
    "https://i1.sndcdn.com/artworks-hmQb4kzqbyuJmnts-7UAlGw-t500x500.jpg",
    ]

    return images[id-1]
}

export default getUrl;