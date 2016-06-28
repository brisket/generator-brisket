import express from 'express';

const SIDE_DATA = {
  'green-bean-casserole': {
    name: 'Green Bean Casserole',
    url: 'http://www.rpfit.com/wp-content/uploads/2012/05/green-bean-casserole.jpg'
  },
  'polenta': {
    name: 'Polenta',
    url: 'http://www.mezzetta.com/uploads/recipes/MZ_RecipeImage_Creamy_Polenta.png'
  },
  'greens': {
    name: 'Greens',
    url: 'http://cdn-image.realsimple.com/sites/default/files/styles/rs_photo_gallery_horz/public/image/images/1203/bacon-collard-greens_gal.jpg'
  }
};


const exampleApi = express()

  .get('/side/:type', function(request, response) {
    const side = SIDE_DATA[request.params.type];

    if (!side) {
      response.status(404).json({ missing: 'side' });
    }

    response.json(side);
  })

;

export default exampleApi;
