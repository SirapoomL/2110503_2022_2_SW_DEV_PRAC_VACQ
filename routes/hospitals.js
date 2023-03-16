const express = require("express")
const {getHospitals,getHospital,createHospital,updateHospital,deleteHospital} = require('../controllers/hospitals')
const router = express.Router()

//Include other resource routers
const appointmentRouter = require('./appointments');

const {protect,authorize} = require('../middleware/auth')

router.route('/').get(getHospitals).post(protect, authorize('admin'), createHospital)
router.route('/:id').get(getHospital).put(protect, authorize('admin'), updateHospital).delete(protect, authorize('admin'), deleteHospital)

//Re-route into other resource routers
router.use('/:hospitalId/appointments/',appointmentRouter);

module.exports = router 