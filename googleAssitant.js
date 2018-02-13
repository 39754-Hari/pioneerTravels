const { ActionsSdkApp } = require('actions-on-google');
var serviceNowApi = require('./serviceNowApi.js')
var googleAssistantFunction={};

googleAssistantFunction.operation = function(req,res){
    const app = new ActionsSdkApp({ request: req, response: res });
    var resObj = {}; 
    // resObj={
    //     "speech": "",
    //     "messages": [
    //       {            
    //       "type": "simple_response",
    //       "platform": "google",
    //       "textToSpeech": "Hi,Welcome to Pioneer Travels ServiceNow.Reached end"
    //       }
    //     ]
    //   };
    //   return res.json(resObj);
      if(req.body.result.action === 'create_incident_sub_category1-1'){   
        var resObj = {}; 
        serviceNowApi.createIncident(req.body.result.parameters,'2',function(err,data){
          if (err) {
            resObj={
              "speech": "",
              "messages": [
                {
                  "type": "simple_response",
                  "platform": "google",
                  "textToSpeech": "Sorry! There was an error while processing your request. Please try again"
                },
                {
                    "type": "suggestion_chips",
                    "platform": "google",
                    "suggestions": [
                      {
                        "title": "Main menu"
                      }
                    ]
                  }
              ]
            };
          }
        else{
          resObj={
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
          };
        }
          res.json(resObj);
        });   
      }
      if(req.body.result.action === 'create_incident_sub_category1-2'){    
        var resObj = {}; 
        serviceNowApi.createIncident(req.body.result.parameters,'2',function(err,data){
          if (err) {
            resObj={"speech": "",
            "messages": [
              {
                "type": "simple_response",
                "platform": "google",
                "textToSpeech": "Sorry! There was an error while processing your request. Please try again"
              },
              {
                  "type": "suggestion_chips",
                  "platform": "google",
                  "suggestions": [
                    {
                      "title": "Main menu"
                    }
                  ]
                }
            ]
            };
          }
        else{
          resObj={
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
          };
        }
          res.json(resObj);
        });      
      }
      if(req.body.result.action === 'create_incident_sub_category2-1'){    
        var resObj = {}; 
        serviceNowApi.createIncident(req.body.result.parameters,'1',function(err,data){
          if (err) {
            resObj={
                "speech": "",
                "messages": [
                  {
                    "type": "simple_response",
                    "platform": "google",
                    "textToSpeech": "Sorry! There was an error while processing your request. Please try again"
                  },
                  {
                      "type": "suggestion_chips",
                      "platform": "google",
                      "suggestions": [
                        {
                          "title": "Main menu"
                        }
                      ]
                    }
                ]
            };
          }
        else{
          resObj={
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
          };
        }
          res.json(resObj);
        }); 
      }  
      if(req.body.result.action === 'create_incident_sub_category2-2'){    
        var resObj = {}; 
        serviceNowApi.createIncident(req.body.result.parameters,'1',function(err,data){
          if (err) {
            resObj={
                "speech": "",
                "messages": [
                  {
                    "type": "simple_response",
                    "platform": "google",
                    "textToSpeech": "Sorry! There was an error while processing your request. Please try again"
                  },
                  {
                      "type": "suggestion_chips",
                      "platform": "google",
                      "suggestions": [
                        {
                          "title": "Main menu"
                        }
                      ]
                    }
                ]
            };
          }
        else{
          resObj={
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
          };
        }
          res.json(resObj);
        });
      }
      if(req.body.result.action === 'create_incident_sub_category3-1'){    
        var resObj = {}; 
        serviceNowApi.createIncident(req.body.result.parameters,'1',function(err,data){
          if (err) {
            resObj={
                "speech": "",
                "messages": [
                  {
                    "type": "simple_response",
                    "platform": "google",
                    "textToSpeech": "Sorry! There was an error while processing your request. Please try again"
                  },
                  {
                      "type": "suggestion_chips",
                      "platform": "google",
                      "suggestions": [
                        {
                          "title": "Main menu"
                        }
                      ]
                    }
                ]
            };
          }
        else{
          resObj={
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
          };
        }
          res.json(resObj);
        });
      }
      if(req.body.result.action === 'create_incident_sub_category3-2'){    
        var resObj = {}; 
        serviceNowApi.createIncident(req.body.result.parameters,'1',function(err,data){
          if (err) {
            resObj={
                "speech": "",
                "messages": [
                  {
                    "type": "simple_response",
                    "platform": "google",
                    "textToSpeech": "Sorry! There was an error while processing your request. Please try again"
                  },
                  {
                      "type": "suggestion_chips",
                      "platform": "google",
                      "suggestions": [
                        {
                          "title": "Main menu"
                        }
                      ]
                    }
                ]
            };
          }
        else{
          resObj={
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
          };
        }
          res.json(resObj);
        });
      }
      if(req.body.result.action === 'incident_status'){
        console.log((req.body.result.parameters.incidentId).toLowerCase().indexOf('inc'));
        var resObj = {}  ;
        if(req.body.result.parameters.incidentId != ''){
        if((req.body.result.parameters.incidentId).toLowerCase().indexOf('inc') > -1  )
          {
            console.log('hiii');
            serviceNowApi.getIncident(req.body.result.parameters.incidentId,function(err,data) {
              if (err) {
                resObj={
                    "speech": "",
                    "messages": [
                      {
                        "type": "simple_response",
                        "platform": "google",
                        "textToSpeech": "Sorry! There was an error while processing your request. Please try again"
                      },
                      {
                          "type": "suggestion_chips",
                          "platform": "google",
                          "suggestions": [
                            {
                              "title": "Main menu"
                            }
                          ]
                        }
                    ]
                };
              }
              else{
                if (typeof(data.error) != 'undefined' ){
                  console.log('hiii::',data.error);
                  if(data.error.message == 'No Record found'){
                    resObj= {
                        "speech": "",
                        "messages": [
                          {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech": "Entered incident number is not found",
                            "displayText": "Entered incident id is not found!"
                          },
                          {
                              "type": "suggestion_chips",
                              "platform": "google",
                              "suggestions": [
                                {
                                    "title": "Try Again"
                                },
                                {
                                  "title": "Main Menu"
                                }
                              ]
                            }
                        ]
                    }
                  }
                }
                else{
                  var state = data.result[0].state;
                  if(state == 1){
                    resObj={
                        "speech": "",
                        "messages": [
                          {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech":"Status of your incident is New",
                            "displayText": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'New\' and updated on "+data.result[0].sys_updated_on+".\nWhat do you wanna do next?"
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
                    };
                  }
                  else if(state == 2){
                    resObj={                        
                        "speech": "",
                        "messages": [
                          {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech":"Status of your incident is In Progress",
                            "displayText": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'In Progress\' and updated on "+data.result[0].sys_updated_on+".\nWhat do you wanna do next?"
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
                    };
                  }
                  else if(state == 3){
                    resObj={                        
                        "speech": "",
                        "messages": [
                          {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech":"Status of your incident is On Hold",
                            "displayText": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'On Hold\' and updated on "+data.result[0].sys_updated_on+".\nWhat do you wanna do next?"
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
                    };
                  }
                  else if(state == 6){
                    resObj={                        
                        "speech": "",
                        "messages": [
                          {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech":"Status of your incident is Resolved",
                            "displayText": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'Resolved\' and updated on "+data.result[0].sys_updated_on+".\nWhat do you wanna do next?"
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
                    };
                  }
                  else if(state == 7){
                    resObj={                        
                        "speech": "",
                        "messages": [
                          {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech":"Status of your incident is Closed",
                            "displayText": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'Closed\' and updated on "+data.result[0].sys_updated_on+".\nWhat do you wanna do next?"
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
                    };
                  }
                  else if(state == 8){
                    resObj={                        
                        "speech": "",
                        "messages": [
                          {
                            "type": "simple_response",
                            "platform": "google",
                            "textToSpeech":"Status of your incident is Canceled",
                            "displayText": "Status of your incident id \n"+req.body.result.parameters.incidentId + " is : \'Canceled\' and updated on "+data.result[0].sys_updated_on+".\nWhat do you wanna do next?"
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
                    };
                  }          
                }
              }      
              res.json(resObj);
            }); 
          }
          else if( (req.body.result.parameters.incidentId).toLowerCase().indexOf('exit') == 0 ){
              return res.json({	 
                speech:"",
                displayText: "",
                followupEvent: {
                  "name": "WELCOME",
                  "data": {
                  }
                }
              });
          }
          else{
            console.log('Inside elseee');
            /*return res.json({           
              "speech": "",
              "messages": [
                 {
               "type": 2,
                "platform": "facebook",
                "title": "Entered incident id is invalid try with valid one!",
                "replies": [
                 "Try Again",
                 "Exit",
                 "Main Menu"
                   ]
                  }
               ]
              });*/
              return res.json({	 
                   speech:"Entered incident id is invalid.Enter a valid one!",
                   textToSpeech:"Entered incident id is invalid.Enter a valid one!",
                   displayText: "Entered incident id is invalid.Enter a valid one!",
                   followupEvent: {
                     "name": "event_status",
                     "data": { 
                     "incidentId" : ""
                     }
                   }
                 });      
          }
        }  
           
      }     
    /*app.ask({        
    speech: 'Howdy! You reached correct place',
    displayText: 'Howdy! welcome '
    });*/
}
module.exports = googleAssistantFunction;