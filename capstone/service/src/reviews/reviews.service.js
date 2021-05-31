const { NotFound, Unauthorized } = require('http-errors');
//const Cafe = require('./cafes.entity');
const Review = require('./reviews.entity');
const users = require('../users/users.service');
const Cafe = require('../cafes/cafes.entity');
//const cafesEntity = require('../cafes/cafes.entity');
// const cafes = require('../cafes/cafes.service');

class ReviewService{

    async addReview(id,creat , payload) {
    //let dbUser = await this.findOne(id);
 //   const caf =  Cafe.findByIdAndUpdate(id,{ new: true });
    const user = await users.findOne(creat.userId);
   
    const rev = {
        ...payload,
        creator: user,
        cafe:id
        
        
    }
    const dbReviews = new Review(rev);
    return dbReviews.save();

  }


  async Search(id){
    //   console.log(id);
    //   return id;
      const user =  await Review.find( { 'cafe' : id } );
      const cafe =  await Cafe.findById(id, { name: true }).exec();
      return {user, cafe};
  }
}


module.exports = new ReviewService();
