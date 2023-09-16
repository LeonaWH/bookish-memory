import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
    {
        title: 'Improving end distrusts instantly',
        text: 'Lorem Ipsum has been the industrys standard dummy text ever since '
    },
    {
        title: 'Become the tended active',
        text: 'Lorem Ipsum has been the industrys standard dummy text ever since '
    },
    {
        title: 'Message or am nothing',
        text: 'Lorem Ipsum has been the industrys standard dummy text ever since '
    },
    {
        title: 'Step into the Future',
        text: 'Lorem Ipsum has been the industrys standard dummy text ever since '
    }

]

const Features = () => {
    return(
    <div className='gpt3__features section__padding' id ="features">
    <div className='gpt3__features-heading'>
        <h1 className='gradient__text'> The Future is now and you just need to realize it. Step into the future today & make it happen.</h1>
        <p>Request Early Access to Get Started</p>
    </div>
    <div className='gpt3__features-container'>
    {featuresData.map((item, index) =>(
        <Feature title={item.title} text={item.text} key={item.title + index} />
    ))}

    </div>
      
    </div>)
}
export default Features;