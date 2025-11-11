import { useRef } from "react";

export default function Home() {
  const followers = useRef();
  const followings = useRef();
  const notFollowingOutput = useRef();

  const simplifyJson = (json) => {
    if (json["relationships_following"]?.length) {
      const updatedJson = json.relationships_following;
      return updatedJson.map(item => item.title)
    }
    return json.map(item => item.string_list_data[0].value)
  }

  const findNotFollowings = () => {
    if (followings.current.value != null && followers.current.value != null) {
      const formatedFollowings = simplifyJson(JSON.parse(followings.current.value));
      const formatedFollowers = simplifyJson(JSON.parse(followers.current.value));
      // console.log("Result:", formatedFollowings.length)
      // console.log("Result:", formatedFollowers.length)
      const notFollowing = formatedFollowings.filter(item => formatedFollowers.includes(item) ? false : item);
      // console.log("Result:", notFollowing)
      notFollowingOutput.current.value = notFollowing.join('\n');
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ alignItems: 'center', alignSelf: 'center' }}>
        <p style={{ fontSize: 30, fontWeight: 'bold' }}>Insta Util</p>
      </div>
      <div style={{ display: 'flex', width: '90%', alignSelf:'center', justifyContent:'space-between' }}>
        <div style={{display: 'flex', flexDirection:'column', width:'45%'}}>
          <p><label htmlFor="followers">Followers:</label></p>
          <textarea id="followers" ref={followers} style={{ height: '20rem' }} />
          </div>
          <div style={{display: 'flex', flexDirection:'column', width:'45%'}}>
          <p><label htmlFor="followings">Followings:</label></p>
          <textarea id="followings" ref={followings} style={{ height: '20rem' }} />
        </div>
        </div>
        <div style={{alignSelf:'center', padding:10}}>
        <button style={{backgroundColor: '#04AA6D', border: 'none', color: 'white', padding: 15, textAlign: 'center', fontSize: 16, borderRadius:5}} onClick={findNotFollowings}> Find Non Followers </button>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '90%', alignSelf:'center' }}>
        <textarea disabled ref={notFollowingOutput} style={{ height: '20rem' }} />
        </div>
    </div>

  );
}
