const router=require("express").Router()
router.use('/api', apiRoutes);

router.use((req, res) => {
  return res.send('Wrong route!');
});

module.exports=router