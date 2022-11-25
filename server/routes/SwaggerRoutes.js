const express = require('express')
const router = express.Router()
 

//this route is for api documentation using swaggerui

/**
 * @swagger
 * components:
 *     schemas:
 *         CountDown:
 *             type: object
 *             required:
 *                 - title
 *                 - description
 *                 - days
 *                 - hours
 *                 - minutes
 *             properties:
 *                 title:
 *                      type: string
 *                      description: the title of the count down
 *                 description:
 *                      type: string
 *                      description: The description of what the countdown is about
 *                 days:
 *                      type: interger
 *                      description: The number of days remaining on the countdown
 *                 hours:
 *                      type: interger
 *                      description: The number of hours remaining on countdown
 *                 minutes:
 *                      type: interger
 *                      description: The number of minutes remaining on the countdown
 *             example:
 *                 title: Hng Stress
 *                 description: Hng will stress you to death but it is for your good
 *                 days: 4
 *                 hours: 12
 *                 minutes: 30
 *     Error:
 *         type: object
 *         properties:
 *             success:
 *                 type: boolean
 *             message:
 *                  type: string
*/


/**
 * @swagger
 * tags:
 *     - name: countdowns
 *       description: The count down model
*/


/**
 * @swagger
 * /add:
 *     post:
 *         summary: user creates countdown
 *         tags:
 *             - countdowns
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                     schema:
 *                          $ref: '#/components/schemas/CountDown'
 *         responses:
 *             '201':
 *                description: Created countdown successfully
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                success:
 *                                     type: boolean
 *                                message:
 *                                     type: object
 *                                     description: countdown created
 *             '406':
 *                 description: countdown already exist
 *                 content:
 *                     application/json:
 *                          schema:
 *                              $ref: '#/components/Error'
 *             '500':
 *                 description: Something went wrong
 *                 content:
 *                     application/json:
 *                         schema:
 *                             $ref: '#/components/Error'
 
 * /{title}:
 *     get:
 *         summary: gets the countdown by the title
 *         tags:
 *             - countdowns
 *         parameters:
 *             - in: path
 *               name: title
 *               schema:
 *                    type: string
 *                    required: true
 *         responses:
 *             '200':
 *                description: Success
 *                content:
 *                    application/json:
 *                        schema:
 *                            #ref: '#/components/schemas/CountDown
 *             '404':
 *                 description: Not found
 *                 content:
 *                     application/json:
 *                          schema:
 *                              $ref: '#/components/Error'
 */

module.exports = router;