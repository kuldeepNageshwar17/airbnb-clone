import React from 'react'
import Banner from './Banner'
import './Home.css'
import Card from './Card'
function Home () {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <Banner />
      <div className='home__section'>
        <Card
          src={
            'https://image.freepik.com/free-photo/3d-rendering-luxury-classic-modern-bedroom-suite-hotel_105762-1149.jpg'
          }
          title={'Online Experinces'}
          description={
            'Comfortable private places with room for family and friends'
          }
        ></Card>
        <Card
          src={
            'https://media.istockphoto.com/photos/hotel-room-suite-with-view-picture-id627892060?k=6&m=627892060&s=612x612&w=0&h=lVIi3QTDsZ1UDnMAjuy8ob9Zm6sBPCZ84x_e_OUl7Wk='
          }
          title={'Unique Stays'}
          description={
            'Comfortable private places with room for family and friends'
          }
        ></Card>
        <Card
          src={
            'https://image.freepik.com/free-photo/3d-rendering-luxury-classic-modern-bedroom-suite-hotel_105762-1149.jpg'
          }
          title={'Entire homes'}
          description={
            'Comfortable private places with room for family and friends'
          }
        ></Card>
      </div>
      <div className='home__section'>
        <Card
          src={
            'https://image.freepik.com/free-photo/3d-rendering-luxury-classic-modern-bedroom-suite-hotel_105762-1149.jpg'
          }
          title={'Online Experinces'}
          description={
            'Comfortable private places with room for family and friends'
          }
        ></Card>
        <Card
          src={
            'https://media.istockphoto.com/photos/hotel-room-suite-with-view-picture-id627892060?k=6&m=627892060&s=612x612&w=0&h=lVIi3QTDsZ1UDnMAjuy8ob9Zm6sBPCZ84x_e_OUl7Wk='
          }
          title={'Unique Stays'}
          description={
            'Comfortable private places with room for family and friends'
          }
        ></Card>
        <Card
          src={
            'https://image.freepik.com/free-photo/3d-rendering-luxury-classic-modern-bedroom-suite-hotel_105762-1149.jpg'
          }
          title={'Entire homes'}
          description={
            'Comfortable private places with room for family and friends'
          }
        ></Card>
      </div>
    </div>
  )
}

export default Home
