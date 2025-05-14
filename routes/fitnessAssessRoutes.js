const express = require('express');
const { authMiddleware } = require('../middleware/auth');
const { createAssessment, getLatestAssetment, getPlan, getFitnessAssetsById, getAllFitnessAssets } = require('../controllers/fitnessAssementController');
const router = express.Router();

router.post('/',authMiddleware,createAssessment);
router.get('/latest', authMiddleware,getLatestAssetment);
router.get('/plan', authMiddleware,getPlan);
router.get('/getFitnessAsset', authMiddleware,getFitnessAssetsById);
router.get('/',getAllFitnessAssets);
module.exports = router;
