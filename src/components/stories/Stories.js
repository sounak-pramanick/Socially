import React from 'react';
import './stories.scss';

const Stories = () => {
    const stories = [
        {
          id: 1,
          name: "Jane Doe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 2,
          name: "Jane Doe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 3,
          name: "Jane Doe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
        {
          id: 4,
          name: "Jane Doe",
          img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
        },
      ];

  
  return (
    <div className="stories">
        <div className="story">
            <img 
                src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="" 
            />
            
            <span>John Doe</span>

            <button>+</button>
        </div>
        
        {stories.map((story) => (
            <div className="story" key={story.id}>
                <img 
                    src={story.img} 
                    alt="" 
                />
                
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories