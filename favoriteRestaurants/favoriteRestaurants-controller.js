import * as favoriteRestaurantsDao from './favoriteRestaurants-dao.js';

const FavoriteRestaurantsController = (app) => {
    const favoriteRestaurant = async (req, res) => {
        const userId = req.params.userId;
        const restaurantId = req.params.restaurantId;
        const restaurantName = req.params.restaurantName;
        console.log(req.params);
        const status = await favoriteRestaurantsDao.favoriteRestaurants(userId, restaurantId, restaurantName);
        console.log(status);
        res.json(status);
    };

    const findFavRestaurantsByUserId = async (req, res) => {
        const userId = req.params.userId;
        const favRestaurants = await favoriteRestaurantsDao.findFavRestaurantsByUserId(userId);
        res.json(favRestaurants);
    };

    app.post("/api/users/:userId/favoriteRestaurants/:restaurantId/:restaurantName", favoriteRestaurant);
    app.get("/api/users/:userId/favoriteRestaurants", findFavRestaurantsByUserId);
};

export default FavoriteRestaurantsController;