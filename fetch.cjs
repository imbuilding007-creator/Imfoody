const yts = require('yt-search');
const fs = require('fs');

async function run() {
  let content = fs.readFileSync('src/data/recipes.js', 'utf8');
  const recipes = ['Poha', 'Masala Oats', 'Besan Chilla', 'Dal Tadka', 'Paneer Butter Masala', 'Mix Veg Curry', 'Egg Curry', 'Chicken Curry', 'Rajma Chawal', 'Upma', 'Aloo Gobi', 'Idli Sambar', 'Chole Bhature', 'Moong Dal Khichdi', 'Palak Paneer'];
  
  for(const r of recipes) {
    try {
      const r2 = await yts(r + ' recipe shorts');
      const vid = r2.videos[0].videoId;
      content = content.replace(new RegExp('name: "' + r + '",\\s*mealType'), 'name: "' + r + '",\n    youtubeId: "' + vid + '",\n    mealType');
      console.log(r, vid);
    } catch(e) {
      console.log('failed', r);
    }
  }
  fs.writeFileSync('src/data/recipes.js', content);
}
run();
