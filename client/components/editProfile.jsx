import React, { useState } from 'react';
import { userzipSignUp } from './Signup.jsx';
import { savedProfile } from './NavBar.jsx';

const editProfile = () => {
  // Set our username, bio, tags state
  const [username, setUsername] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [bio, setBio] = useState('');
  const [tags, setTags] = useState([]);
  const checkboxHandler = (e) => {
    // If the box is checked, add to our state
    if (e.target.checked) {
      const type = e.target.name;
      setTags([...tags, type]);
      // If the box is unchecked, remove from the tags array 
    } else {
      setTags(tags.filter(type => type !== e.target.name));
    }
  };
  // POST request to backend to update user info
  const profileFetchHandler = () => {
    // Query 
    const variables = {
      username: username,
      zipcode: zipcode,
      bio: bio,
      tags: tags,
    };

    const mutation = `mutation ($username:String!, $bio:String, $tags:[String], $zipcode:String!){
                   setProfile(username:$username, bio:$bio, tags:$tags, zipcode:$zipcode)
               }`
    // POST request to our server so the user data gets saved
    fetch('graphql', {
      method: 'POST',
      // mode: 'cors',
      credentials: 'include',
      headers: { 'Context-Type': 'application/json' },
      body: JSON.stringify({ query: mutation, variables: variables })
    })
      .then(res => res.json())
      .then(res => {
        console.log('fetch request in signup', res.data);
        window.href.location = '/homepage';
      });
  };

  const hasBeenChecked = () => {

  }

  return (
    <div>
      <div id="usernameContainer">
        <label>Username: </label>
        <input
          name='username'
          type='text'
          placeholder={savedProfile.username}
          onChange={e => setUsername(e.target.value.trim())}
          value={savedProfile.username}
          variant="outlined"
          required />
        <br />
      </div>

      <div id="zipCodeContainer">
        <label>Zipcode: </label>
        <input
          name='zipcode'
          type='text'
          placeholder={userzipSignUp.Zipcode}
          onChange={e => setZipcode(e.target.value.trim())}
          value={zipcode}
          variant="outlined"
          required />
        <br />
      </div>

      <div id="bioDiv">
        <span><h4>What do you hope to gain from pair progamming? </h4></span>
        <textarea
          // value={value}
          cols={55}
          rows={10}
          placeholder='Max: 200 characters'
          onChange={e => setBio(e.target.value)}
          maxLength={200}
          value={bio}
        />
      </div>
      <h4>Select pair programming interests:</h4>
      <input className="box" type="checkbox" name="TypeScript" onChange={(e) => checkboxHandler(e)} checked={hasBeenChecked}/><label> TypeScript</label><br /><br />
      <input className="box" type="checkbox" name="JS: Beginner" onChange={(e) => checkboxHandler(e)} /><label> JS: Beginner</label><br />
      <input className="box" type="checkbox" name="JS: Intermediate" onChange={(e) => checkboxHandler(e)} /><label> JS: Intermediate</label><br />
      <input className="box" type="checkbox" name="JS: Advanced" onChange={(e) => checkboxHandler(e)} /><label> JS: Advanced</label><br />
      <input className="box" type="checkbox" name="Algorithms" onChange={(e) => checkboxHandler(e)} /><label> Algorithms</label><br />
      <input className="box" type="checkbox" name="Angular" onChange={(e) => checkboxHandler(e)} /><label> Angular</label><br />
      <input className="box" type="checkbox" name="Vue" onChange={(e) => checkboxHandler(e)} /><label> Vue</label><br />
      <input className="box" type="checkbox" name="React" onChange={(e) => checkboxHandler(e)} /><label> React</label><br />
      <input className="box" type="checkbox" name="Redux" onChange={(e) => checkboxHandler(e)} /><label> Redux</label><br />
      <input className="box" type="checkbox" name="Node.JS" onChange={(e) => checkboxHandler(e)} /><label> Node.JS</label><br />
      <input className="box" type="checkbox" name="Express" onChange={(e) => checkboxHandler(e)} /><label> Express</label><br />
      <input className="box" type="checkbox" name="Sequelize" onChange={(e) => checkboxHandler(e)} /><label> Sequelize</label><br />
      <input className="box" type="checkbox" name="SQL" onChange={(e) => checkboxHandler(e)} /><label> SQL</label><br />
      <input className="box" type="checkbox" name="MongoDB" onChange={(e) => checkboxHandler(e)} /><label> MongoDB</label><br />
      <input className="box" type="checkbox" name="GraphQL" onChange={(e) => checkboxHandler(e)} /><label> GraphQL</label><br />
      <button id="profileBtn" onClick={() => profileFetchHandler()}>Submit</button>
    </div>
  )
};

export default Profile; 