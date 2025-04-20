const following = {};

const followers = [];

  const simplifyJson = (json) => {
    if(json["relationships_following"]?.length){
      const updatedJson = json.relationships_following;
      return updatedJson.map(item => item.string_list_data[0].value)
    }
    return json.map(item => item.string_list_data[0].value)
  }

  const formatedFollowings = simplifyJson(following);
  const formatedFollowers = simplifyJson(followers);
  const notFollowing = formatedFollowings.filter(item => formatedFollowers.includes(item) ? false : item );