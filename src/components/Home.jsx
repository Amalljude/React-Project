import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'



let appleitem = [{
    image : 'https://i.pinimg.com/1200x/a5/83/9d/a5839d7ee1dd656bf06a1bfc3e016994.jpg',
},
{
    image: 'https://i.pinimg.com/1200x/a1/d0/c1/a1d0c1aa0f6dd658207028016aaf5c63.jpg',
},
{
    image: 'https://i.pinimg.com/1200x/c6/bf/92/c6bf9296bf08666b8fd6464edf1c1cd4.jpg',
},
{
    image: ' https://i.pinimg.com/1200x/c1/43/30/c14330402c0ecff9b8bed0f8dab3375d.jpg'
}
]

let firstitem =[{
    images:'https://i.pinimg.com/1200x/70/15/d0/7015d0a12ad9842b3b842cc0bcef6594.jpg'
},
{
    images:'https://i.pinimg.com/1200x/ae/19/ac/ae19acb9ecfaf6a75964c67358d7faca.jpg   '
},
{
    images:' https://i.pinimg.com/1200x/c1/43/30/c14330402c0ecff9b8bed0f8dab3375d.jpg'
}]

function Home() {
    return (
        <div className='container-fluid'>
            <Header />


            <div style={{ width: "100%",marginTop:'-6px'}}>
                <Carousel>
                    {appleitem.map((hai, index) => (
                        <Carousel.Item key={index}>
                            <img className='display-block' src={hai.image} alt={hai.title} style={{ height: '600px', width: "100%", justifyContent: 'center', borderRadius: '10px', boxShadow: '5px black' }} />
                            <Carousel.Caption className='text' style={{ marginTop: '100px' }}>
                                <h3 style={{ fontSize: '30px' }}>{hai.title}</h3>
                                <h3 style={{ fontSize: '15px' }}>{hai.description}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>




            <div style={{ width: '50%', height: '200px', textAlign: 'center', justifyContent: 'center', marginLeft: '350px', marginTop: '30px' }}>
                <h1>❝PLAY TO WIN❞</h1>
                <h1 style={{ color: 'gray', marginTop: '-39px' }}>__________________</h1>
                <h1 style={{ color: 'gray', marginTop: '-35px' }}>__________________</h1>
            </div>




            <div style={{ float: 'left', width: '20%', height: '100px' }}>
                <img style={{borderRadius:'10px', width: '150%', height: '430px', marginLeft: '150px', marginTop: '-25px' }} src="https://i.pinimg.com/1200x/7f/c7/72/7fc772ad676d6b27d700b121b7f021fb.jpg" alt="" />
            </div>




            <div style={{ float: 'right', padding: "5px" }}>
                <h3 style={{ float: "right", fontSize: '30px', width: '50%', height: '330px', marginLeft: '200px', marginTop: '-100px',fontFamily:"Papyrus",padding:'20px' }}>❝Adidas is a German multinational corporation that 
                    designs and manufactures athletic
                    footwear, apparel, and accessories, and is one of the world's largest sportswear manufacturers. Founded by Adolf "Adi" Dassler in 1949, it has a long history in sports, gained early recognition after
                    Jesse Owens won medals in Dassler-made shoes at the 1936 Olympics, and is known
                    for its iconic three-stripe logo.❞ </h3>
            </div><br />




            <div style={{ width: '50%', height: '200px', textAlign: 'center', justifyContent: 'center', marginLeft: '350px', marginTop: '36%' }}>
                <h1 style={{ fontSize: '36px' }}>❝WORK  SWEAT  ACHIEVE❞</h1>
                <h1 style={{ color: 'gray', marginTop: '-39px', fontSize: '40px' }}>______________</h1>
                <h1 style={{ color: 'gray', marginTop: '-35px' }}>______________</h1>
            </div>



            <div style={{ borderRadius: '10px', display: 'flex', flex: 'wrap', gap: '60px', width: '40%', height: '200px' }}>
                          <img style={{borderRadius: '10px', boxShadow: ' 1px 2px grey', marginLeft: '86px', width: '53%', height: '380px', marginTop: '-30px' }} src="https://i.pinimg.com/1200x/f1/3a/22/f13a227f64ada604c573a690bd03da46.jpg" alt="" />  
                <img style={{borderRadius: '10px', boxShadow: ' 1px 2px grey', marginLeft: '96px', width: '55%', height: '380px', marginTop: '-30px' }} src="https://i.pinimg.com/1200x/80/ae/5e/80ae5eca183daddcccbd7acbf972df33.jpg" alt="" />
                                <img style={{borderRadius: '10px', boxShadow: ' 1px 2px grey', marginLeft: '94px', width: '53%', height: '380px', marginTop: '-30px' }} src="https://i.pinimg.com/1200x/d6/3c/10/d63c108963894667777ccc0b6ad7cfcc.jpg" alt="" />
            </div>

      <div style={{ borderRadius: '10px', display: 'flex', flex: 'wrap', gap: '60px', width: '40%', height: '200px' }}>
                <img style={{borderRadius: '10px', boxShadow: ' 1px 2px grey', marginLeft: '86px', width:'54%', height: '380px', marginTop: '190px' }} src="https://i.pinimg.com/1200x/78/69/d3/7869d3dd09e7f18d79e47db6f92d6f75.jpg" alt="" />
                <img style={{borderRadius: '10px', boxShadow: ' 1px 2px grey', marginLeft: '96px', width: '55%', height: '380px', marginTop: '190px' }} src="https://i.pinimg.com/736x/82/53/39/825339663dae4f4123a8211fc93ceb85.jpg" alt="" />
                <img style={{borderRadius: '10px', boxShadow: ' 1px 2px grey', marginLeft: '94px', width: '53%', height: '380px', marginTop: '190px' }} src="https://i.pinimg.com/736x/e6/b5/db/e6b5db199eda7086c29e73f66eaa4a56.jpg" alt="" />
            </div>



        <div style={{ width: "100%" ,marginTop:"500px",height:'300px'}}>
                <Carousel>
                    {firstitem.map((bye, index) => (
                        <Carousel.Item key={index}>
                            <img className='display-block' src={bye.images} alt={bye.title} style={{ height: '600px', width: "100%", justifyContent: 'center', borderRadius: '10px', boxShadow: '5px black' }} />
                            <Carousel.Caption className='text' style={{ marginTop: '100px' }}>
                                <h3 style={{ fontSize: '30px' }}>{bye.title}</h3>
                                <h3 style={{ fontSize: '15px' }}>{bye.description}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

        <Footer />



        </div>
    )
}

export default Home



