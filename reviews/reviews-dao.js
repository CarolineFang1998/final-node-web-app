import reviewsModel from "./reviews-model";

export const findAllReviews = async () => {
    const reviews = await reviewsModel.find();
    return reviews;
}

export const findReviewsByRestaurantId = async (restaurantId) => {
    const reviews = await reviewsModel.find({ restaurantID: restaurantId });
    return reviews;
}

export const findReviewsByUserId = async (userId) => {
    const reviews = await reviewsModel.find({ userID: userId });
    return reviews;
}

export const deleteReview = async (id) => {
    const status = await reviewsModel.deleteOne({ _id: id });
    return status;
};
