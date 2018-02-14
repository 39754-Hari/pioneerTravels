const { ActionsSdkApp } = require('actions-on-google');
var serviceNowApi = require('./serviceNowApi')

//DialogflowApp
let createScheduleIncident = (app)=>{
    console.log('Inside successful',app.body_.result.parameters);
        serviceNowApi.createIncident(app.body_.result.parameters,'2',function(err,data){
          if (err) {
            app.ask(app.buildRichResponse()
            .addSimpleResponse('Sorry!There was an error occurred while processing your request please try again')
            .addSuggestions(['Exit', 'Main Menu'])              
          );           
          }
        else{
          /*resObj={
          "speech": "",
          "messages": [
            {
              "type": "simple_response",
              "platform": "google",
              "textToSpeech":"Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully, please find the details on screen ",
              "displayText": "Hi "+req.body.result.parameters.userName +", Your Incident has been raised successfully. Please note your incident id for future reference : "+data.result.number
              +". \nAn acknowledgement SMS with incident id will be sent to your Phone number "+req.body.result.parameters.phoneNumber
              +". \nOur customer care agent will get back to you shortly"
              +".\nWhat do you wanna do next?"
            },
            {
                "type": "suggestion_chips",
                "platform": "google",
                "suggestions": [
                {
                    "title": "Exit"
                },
                {
                   "title": "Main menu"
                }
                ]
              }
            ]
          };*/
          app.ask(app.buildRichResponse()
          .addSimpleResponse('Incident created!')
          .addBasicCard(app.buildBasicCard("Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS with incident id will be sent to your Phone number "+app.body_.result.parameters.phoneNumber
          +". \nOur customer care agent will get back to you shortly"
          +".\nWhat do you wanna do next?")
            .setTitle("Hi "+app.body_.result.parameters.userName +", Your Incident has been raised successfully.")
            .setImage("https://dummyimage.com/400x300/fff/ff0015&text="+data.result.number, data.result.number)
            .setImageDisplay('ORIGINAL')
          )          
          .addSuggestions(['Exit', 'Main Menu'])              
        );   
      }
    });
}
let createBoardingIncident = (app)=>{
    console.log('Inside successful',app.body_.result.parameters);
        serviceNowApi.createIncident(app.body_.result.parameters,'2',function(err,data){
          if (err) {
            app.ask(app.buildRichResponse()
            .addSimpleResponse('Sorry!There was an error occurred while processing your request please try again')
            .addSuggestions(['Exit', 'Main Menu'])              
          );           
          }
        else{
          app.ask(app.buildRichResponse()
          .addSimpleResponse('Incident created!')
          .addBasicCard(app.buildBasicCard("Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS with incident id will be sent to your Phone number "+app.body_.result.parameters.phoneNumber
          +". \nOur customer care agent will get back to you shortly"
          +".\nWhat do you wanna do next?")
            .setTitle("Hi "+app.body_.result.parameters.userName +", Your Incident has been raised successfully.")
            .setImage("https://dummyimage.com/300x200/fff/ff0015&text="+data.result.number, data.result.number)
            .setImageDisplay('CROPPED')
          )          
          .addSuggestions(['Exit', 'Main Menu'])              
        );   
      }
    });
}
let createMainatenceIncident = (app)=>{
    console.log('Inside successful',app.body_.result.parameters);
        serviceNowApi.createIncident(app.body_.result.parameters,'1',function(err,data){
          if (err) {
            app.ask(app.buildRichResponse()
            .addSimpleResponse('Sorry!There was an error occurred while processing your request please try again')
            .addSuggestions(['Exit', 'Main Menu'])              
          );           
          }
        else{
          app.ask(app.buildRichResponse()
          .addSimpleResponse('Incident created!')
          .addBasicCard(app.buildBasicCard("Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS with incident id will be sent to your Phone number "+app.body_.result.parameters.phoneNumber
          +". \nOur customer care agent will get back to you shortly"
          +".\nWhat do you wanna do next?")
            .setTitle("Hi "+app.body_.result.parameters.userName +", Your Incident has been raised successfully.")
            .setImage("https://dummyimage.com/300x200/fff/ff0015&text="+data.result.number, data.result.number)
            .setImageDisplay('CROPPED')
          )          
          .addSuggestions(['Exit', 'Main Menu'])              
        );   
      }
    });
}
let createHospitalityIncident = (app)=>{
    console.log('Inside successful',app.body_.result.parameters);
        serviceNowApi.createIncident(app.body_.result.parameters,'1',function(err,data){
          if (err) {
            app.ask(app.buildRichResponse()
            .addSimpleResponse('Sorry!There was an error occurred while processing your request please try again')
            .addSuggestions(['Exit', 'Main Menu'])              
          );           
          }
        else{
          app.ask(app.buildRichResponse()
          .addSimpleResponse('Incident created!')
          .addBasicCard(app.buildBasicCard("Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS with incident id will be sent to your Phone number "+app.body_.result.parameters.phoneNumber
          +". \nOur customer care agent will get back to you shortly"
          +".\nWhat do you wanna do next?")
            .setTitle("Hi "+app.body_.result.parameters.userName +", Your Incident has been raised successfully.")
            .setImage("https://dummyimage.com/300x200/fff/ff0015&text="+data.result.number, data.result.number)
            .setImageDisplay('CROPPED')
          )          
          .addSuggestions(['Exit', 'Main Menu'])              
        );   
      }
    });
}
let createFailedPaymentIncident = (app)=>{
    console.log('Inside successful',app.body_.result.parameters);
        serviceNowApi.createIncident(app.body_.result.parameters,'1',function(err,data){
          if (err) {
            app.ask(app.buildRichResponse()
            .addSimpleResponse('Sorry!There was an error occurred while processing your request please try again')
            .addSuggestions(['Exit', 'Main Menu'])              
          );           
          }
        else{
          app.ask(app.buildRichResponse()
          .addSimpleResponse('Incident created!')
          .addBasicCard(app.buildBasicCard("Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS with incident id will be sent to your Phone number "+app.body_.result.parameters.phoneNumber
          +". \nOur customer care agent will get back to you shortly"
          +".\nWhat do you wanna do next?")
            .setTitle("Hi "+app.body_.result.parameters.userName +", Your Incident has been raised successfully.")
            .setImage("https://dummyimage.com/300x200/fff/ff0015&text="+data.result.number, data.result.number)
            .setImageDisplay('CROPPED')
          )          
          .addSuggestions(['Exit', 'Main Menu'])              
        );   
      }
    });
}
let createRefundIncident = (app)=>{
    console.log('Inside successful',app.body_.result.parameters);
        serviceNowApi.createIncident(app.body_.result.parameters,'1',function(err,data){
          if (err) {
            app.ask(app.buildRichResponse()
            .addSimpleResponse('Sorry!There was an error occurred while processing your request please try again')
            .addSuggestions(['Exit', 'Main Menu'])              
          );           
          }
        else{
          app.ask(app.buildRichResponse()
          .addSimpleResponse('Incident created!')
          .addBasicCard(app.buildBasicCard("Please note your incident id for future reference : "+data.result.number
          +". \nAn acknowledgement SMS with incident id will be sent to your Phone number "+app.body_.result.parameters.phoneNumber
          +". \nOur customer care agent will get back to you shortly"
          +".\nWhat do you wanna do next?")
            .setTitle("Hi "+app.body_.result.parameters.userName +", Your Incident has been raised successfully.")
            .setImage("https://dummyimage.com/300x200/fff/ff0015&text="+data.result.number, data.result.number)
            .setImageDisplay('CROPPED')
          )          
          .addSuggestions(['Exit', 'Main Menu'])              
        );   
      }
    });
}
const actionMap = new Map();
actionMap.set('create_incident_late_schedule', createScheduleIncident);
actionMap.set('create_incident_boarding', createBoardingIncident);
actionMap.set('create_incident_maintenance', createMainatenceIncident);
actionMap.set('create_incident_food', createHospitalityIncident);
actionMap.set('create_incident_payment_fail', createFailedPaymentIncident);
actionMap.set('create_incident_refund', createRefundIncident);
module.exports = actionMap;
