const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Load env
dotenv.config({ path: './config.env' });

const app = express();

if(process.env.NODE_ENV === 'development') { 
  app.use(morgan('dev'));
}

app.use('/api/v1/profile', require('./routes/profile'));

  app.use(express.static(__dirname + `/public/`));

  app.get(/.*/, (req, res) => res.sendFile(__dirname + `/public/index.html`));
}

  //Handle SPA
const port = process.env.PORT || 8000;




app.listen(5000, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);

})
