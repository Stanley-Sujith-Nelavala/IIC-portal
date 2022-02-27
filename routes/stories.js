const express = require('express')
const router = express.Router()
const { ensureAuth } = require('../middleware/auth')

const Story = require('../models/Story')
const Story2 = require('../models/Story2')

// @desc    Show add page
// @route   GET /stories/add
router.get('/add', ensureAuth, (req, res) => {
  res.render('stories/add')
})

// @desc    Show add page
// @route   GET /stories/add
router.get('/add2', ensureAuth, (req, res) => {
  res.render('Story1/add')
})

// @desc    Process add form
// @route   POST /stories
router.post('/', ensureAuth, async (req, res) => {
  try {
    req.body.user = req.user.id
    await Story.create(req.body)
    res.redirect('/dashboard')
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

// @desc    Process add form
// @route   POST /stories
router.post('/st1', ensureAuth, async (req, res) => {
  try {
    req.body.user = req.user.id
    await Story2.create(req.body)
    res.redirect('/dashboard')
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

// @desc    Show all stories
// @route   GET /stories
router.get('/', ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({ status: 'public' })
      .populate('user')
      .sort({ createdAt: 'desc' })
      .lean()

    res.render('stories/index', {
      stories,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})


// @desc    Show all stories
// @route   GET /stories
router.get('/st1', ensureAuth, async (req, res) => {
  try {
    const stories2 = await Story2.find({ status: 'public' })
      .populate('user')
      .sort({ createdAt: 'desc' })
      .lean()

    res.render('Story1/index', {
      stories2,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

// @desc    Show single story
// @route   GET /stories/:id
router.get('/:id', ensureAuth, async (req, res) => {
  try {
    let story = await Story.findById(req.params.id).populate('user').lean()

    if (!story) {
      return res.render('error/404')
    }

    if (story.user._id != req.user.id && story.status == 'private') {
      res.render('error/404')
    } else {
      res.render('stories/show', {
        story,
      })
    }
  } catch (err) {
    console.error(err)
    res.render('error/404')
  }
})

// @desc    Show single story
// @route   GET /stories/:id
router.get('/st1/:id', ensureAuth, async (req, res) => {
  try {
    let stories2 = await Story2.findById(req.params.id).populate('user').lean()
    console.log("step1")
    if (!stories2) {
      return res.render('error/404')
    }

    if (stories2.user._id != req.user.id && stories2.status == 'private') {
      res.render('error/404')
    } else {
      console.log("step2")
      res.render('Story1/show', {
        stories2,
      })
    }
  } catch (err) {
    console.error(err)
    res.render('error/404')
  }
})

// @desc    Show edit page
// @route   GET /stories/edit/:id
router.get('/edit/:id', ensureAuth, async (req, res) => {
  try {
    const story = await Story.findOne({
      _id: req.params.id,
    }).lean()

    if (!story) {
      return res.render('error/404')
    }

    if (story.user != req.user.id) {
      res.redirect('/stories')
    } else {
      res.render('stories/edit', {
        story,
      })
    }
  } catch (err) {
    console.error(err)
    return res.render('error/500')
  }
})

// @desc    Show edit page
// @route   GET /stories/edit/:id
router.get('/st1/edit/:id', ensureAuth, async (req, res) => {
  try {
    const stories2 = await Story2.findOne({
      _id: req.params.id,
    }).lean()

    if (!stories2) {
      return res.render('error/404')
    }

    if (stories2.user != req.user.id) {
      res.redirect('/stories/st1')
    } else {
      res.render('Story1/edit', {
        stories2,
      })
    }
  } catch (err) {
    console.error(err)
    return res.render('error/500')
  }
})

// @desc    Update story
// @route   PUT /stories/:id
router.put('/:id', ensureAuth, async (req, res) => {
  try {
    let story = await Story.findById(req.params.id).lean()

    if (!story) {
      return res.render('error/404')
    }

    if (story.user != req.user.id) {
      res.redirect('/stories')
    } else {
      story = await Story.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
      })

      res.redirect('/dashboard')
    }
  } catch (err) {
    console.error(err)
    return res.render('error/500')
  }
})

// @desc    Update story
// @route   PUT /stories/:id
router.put('/st1/:id', ensureAuth, async (req, res) => {
  try {
    let stories2 = await Story2.findById(req.params.id).lean()

    if (!stories2) {
      return res.render('error/404')
    }

    if (stories2.user != req.user.id) {
      res.redirect('/stories/st1')
    } else {
      stories2 = await Story2.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
      })

      res.redirect('/dashboard')
    }
  } catch (err) {
    console.error(err)
    return res.render('error/500')
  }
})

// @desc    Delete story
// @route   DELETE /stories/:id
router.delete('/:id', ensureAuth, async (req, res) => {
  try {
    let story = await Story.findById(req.params.id).lean()

    if (!story) {
      return res.render('error/404')
    }

    if (story.user != req.user.id) {
      res.redirect('/stories')
    } else {
      await Story.remove({ _id: req.params.id })
      res.redirect('/dashboard')
    }
  } catch (err) {
    console.error(err)
    return res.render('error/500')
  }
})

// @desc    Delete story
// @route   DELETE /stories/:id
router.delete('/st1/:id', ensureAuth, async (req, res) => {
  try {
    let stories2 = await Story2.findById(req.params.id).lean()

    if (!stories2) {
      return res.render('error/404')
    }

    if (stories2.user != req.user.id) {
      res.redirect('/stories/st1')
    } else {
      await Story2.remove({ _id: req.params.id })
      res.redirect('/dashboard')
    }
  } catch (err) {
    console.error(err)
    return res.render('error/500')
  }
})

// @desc    User stories
// @route   GET /stories/user/:userId
router.get('/user/:userId', ensureAuth, async (req, res) => {
  try {
    const stories = await Story.find({
      user: req.params.userId,
      status: 'public',
    })
      .populate('user')
      .lean()

    res.render('stories/index', {
      stories,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

// @desc    User stories
// @route   GET /stories/user/:userId
router.get('/st1/user/:userId', ensureAuth, async (req, res) => {
  try {
    const stories2 = await Story2.find({
      user: req.params.userId,
      status: 'public',
    })
      .populate('user')
      .lean()

    res.render('Story1/index', {
      stories2,
    })
  } catch (err) {
    console.error(err)
    res.render('error/500')
  }
})

//st1


module.exports = router
