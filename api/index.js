const express = require('express')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

// create a new word
app.post('/word', async (req, res) => {
	const { english, target, targetAlphabet, pictureFilepath, language } = req.body

	const word = await prisma.word.create({
		data: {
			english,
			target,
			targetAlphabet,
			pictureFilepath,
			language
		}
	})

	res.status(201).json(word)
})

// update a word
app.put('/word/:id', async (req, res) => {
	const { id } = req.params
	const { english, target, targetAlphabet, pictureFilepath, language } = req.body

	const wordResult = await prisma.word.update({
		where: {
			id
		},
		data: {
			english,
			target,
			targetAlphabet,
			pictureFilepath,
			language
		}
	})

	res.json(wordResult)
})

// get a word
app.get('/word/:word', async (req, res) => {
	const { word } = req.params

	const wordResult = await prisma.word.findFirst({
		where: {
			english: word
		}
	})

	res.json(wordResult)
})

// get all words by language
app.get('/words', async (req, res) => {
	const { language } = req.query

	const wordResult = await prisma.word.findMany({
		where: {
			language
		}
	})

	res.json(wordResult)
})

// delete a word
app.delete('/word/:id', async (req, res) => {
	const { id } = req.params

	const wordResult = await prisma.word.delete({
		where: {
			id
		}
	})

	res.status(204).json(wordResult)
})

module.exports = {
	path: '/api',
	handler: app
}
