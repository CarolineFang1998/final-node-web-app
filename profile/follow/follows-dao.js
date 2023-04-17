import followsModel from "./follows-model.js";

export const createFollow = async (followed, following) => {
  const newFollow = await followsModel.create({followed: followed, following: following});
  return newFollow;
};

export const findFollowersByFollowed = async (userId) => {
  const followers = await followsModel.find({ followed: userId });
  return followers;
};

export const findFollowedByFollowing = async (userId) => {
  const followed = await followsModel.find({ following: userId });
  return followed;
};

export const unfollow = async (followed, following) => {
    const deletedFollow = await followsModel.deleteOne({followed: followed, following: following});
    //console.log("deletedFollow dao", deletedFollow);
    return deletedFollow;
};

export const findIsFollowedById = async (followed, following) => {
    const findFollowed = await followsModel.findOne({followed: followed, following:following});
    return findFollowed;
}