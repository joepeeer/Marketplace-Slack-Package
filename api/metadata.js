module.exports.do = function(req, res){
    res.status(200).send({
        'package': 'Slack',
        'tagline': "Slack API Package",
        "description": "This block can be used alone or in conjunction with each other to build many different kinds of Slack apps.",
        'image': 'https://upload.wikimedia.org/wikipedia/ru/4/41/Slack_logo.png',
        'repo': 'https://github.com/RapidSoftwareSolutions/',
        "accounts": {
            'domain': 'slack.com',
            'credentials': [
                'token',
            ]
        },
        'blocks': [{
            "name":"revokeAuth",
            "description": "This method revokes an access token. Use it when you no longer need a token. For example, with a Sign In With Slack app, call this to log a user out.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token",
                },
                {
                    name: "test",
                    type: "Number",
                    info: "Setting this parameter to 1 triggers a testing mode where the specified token will not actually be revoked.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"testAuth",
            "description": "This method checks authentication and tells you who you are.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getBotInfo",
            "description": "This method returns information about a bot user.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token",
                },
                {
                    name: "bot",
                    type: "String",
                    info: "Bot user to get info on.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getChannels",
            "description": "This method returns a list of all channels in the team. This includes channels the caller is in, channels they are not currently in, and archived channels but does not include private channels. The number of (non-deactivated) members in each channel is also returned.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "excludeArchived",
                    type: "Number",
                    info: "Don't return archived channels.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createChannel",
            "description": "This method is used to create a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name of channel to create.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"archiveChannel",
            "description": "This method archives a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to archive.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getChannelHistory",
            "description": "This method returns a portion of message events from the specified channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to fetch.",
                },
                {
                    name: "latest",
                    type: "String",
                    info: "End of time range of messages to include in results.",
                },
                {
                    name: "oldest",
                    type: "String",
                    info: "Start of time range of messages to include in results.",
                },
                {
                    name: "inclusive",
                    type: "Number",
                    info: "Include messages with latest or oldest timestamp in results.",
                },
                {
                    name: "count",
                    type: "Number",
                    info: "Number of messages to return, between 1 and 1000.",
                },
                {
                    name: "unreads",
                    type: "String",
                    info: "Include unread_count_display in the output?",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getChannelInfo",
            "description": "This method returns information about a team channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to get info on.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"inviteToChannel",
            "description": "This method is used to invite a user to a channel. The calling user must be a member of the channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to get info on.",
                },
                {
                    name: "user",
                    type: "String",
                    info: "User to invite to channel.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"joinChannel",
            "description": "This method is used to join a channel. If the channel does not exist, it is created.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name of channel to join.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"kickFromChannel",
            "description": "This method allows a user to remove another member from a team channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to remove user from.",
                },
                {
                    name: "user",
                    type: "String",
                    info: "User to remove from channel.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"leaveChannel",
            "description": "This method is used to leave a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to leave.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"markChannel",
            "description": "This method moves the read cursor in a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to set reading cursor in.",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the most recently seen message.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"renameChannel",
            "description": "This method renames a team channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to set reading cursor in.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "New name for channel.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setChannelPurpose",
            "description": "This method is used to change the purpose of a channel. The calling user must be a member of the channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to set reading cursor in.",
                },
                {
                    name: "purpose",
                    type: "String",
                    info: "The new purpose.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setChannelTopic",
            "description": "This method is used to change the topic of a channel. The calling user must be a member of the channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to set reading cursor in.",
                },
                {
                    name: "topic",
                    type: "String",
                    info: "The new topic.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"unarchiveChannel",
            "description": "This method unarchives a channel. The calling user is added to the channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to unarchive.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getPrivateChannels",
            "description": "This method returns a list of private channels in the team that the caller is in and archived groups that the caller was in. The list of (non-deactivated) members in each private channel is also returned.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "excludeArchived",
                    type: "Number",
                    info: "Don't return archived PrivateChannels.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createPrivateChannel",
            "description": "This method creates a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name of PrivateChannel to create.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"archivePrivateChannel",
            "description": "This method archives a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to archive.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getPrivateChannelHistory",
            "description": "This method returns a portion of messages/events from the specified private channel. To read the entire history for a private channel, call the method with no latest or oldest arguments, and then continue paging using the instructions below.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Private Channel to fetch.",
                },
                {
                    name: "latest",
                    type: "String",
                    info: "End of time range of messages to include in results.",
                },
                {
                    name: "oldest",
                    type: "String",
                    info: "Start of time range of messages to include in results.",
                },
                {
                    name: "inclusive",
                    type: "Number",
                    info: "Include messages with latest or oldest timestamp in results.",
                },
                {
                    name: "count",
                    type: "Number",
                    info: "Number of messages to return, between 1 and 1000.",
                },
                {
                    name: "unreads",
                    type: "String",
                    info: "Include unread_count_display in the output?",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getPrivateChannelInfo",
            "description": "This method returns information about a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to get info on.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"inviteToPrivateChannel",
            "description": "This method is used to invite a user to a private channel. The calling user must be a member of the private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to get info on.",
                },
                {
                    name: "user",
                    type: "String",
                    info: "User to invite to PrivateChannel.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"kickFromPrivateChannel",
            "description": "This method allows a user to remove another member from a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to remove user from.",
                },
                {
                    name: "user",
                    type: "String",
                    info: "User to remove from PrivateChannel.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"leavePrivateChannel",
            "description": "This method is used to leave a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to leave.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"markPrivateChannel",
            "description": "This method moves the read cursor in a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to set reading cursor in.",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the most recently seen message.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"renamePrivateChannel",
            "description": "This method renames a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to set reading cursor in.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "New name for PrivateChannel.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setPrivateChannelPurpose",
            "description": "This method is used to change the purpose of a private channel. The calling user must be a member of the private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to set reading cursor in.",
                },
                {
                    name: "purpose",
                    type: "String",
                    info: "The new purpose.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setPrivateChannelTopic",
            "description": "This method is used to change the topic of a private channel. The calling user must be a member of the private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to set reading cursor in.",
                },
                {
                    name: "topic",
                    type: "String",
                    info: "The new topic.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"unarchivePrivateChannel",
            "description": "This method unarchives a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to unarchive.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"openPrivateChannel",
            "description": "This method opens a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to open.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"closePrivateChannel",
            "description": "This method closes a private channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "PrivateChannel to close.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"closeDirectMessageChannel",
            "description": "This method closes a direct message channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Direct Message Channel to close.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getDirectMessageChannelHistory",
            "description": "This method returns a portion of messages/events from the specified direct message channel. To read the entire history for a direct message channel, call the method with no latest or oldest arguments, and then continue paging using the instructions below.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: im:history)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to fetch.",
                },
                {
                    name: "latest",
                    type: "String",
                    info: "End of time range of messages to include in results.",
                },
                {
                    name: "oldest",
                    type: "String",
                    info: "Start of time range of messages to include in results.",
                },
                {
                    name: "inclusive",
                    type: "Number",
                    info: "Include messages with latest or oldest timestamp in results.",
                },
                {
                    name: "count",
                    type: "Number",
                    info: "Number of messages to return, between 1 and 1000.",
                },
                {
                    name: "unreads",
                    type: "String",
                    info: "Include unread_count_display in the output?",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUserImChannels",
            "description": "This method returns a list of all im channels that the user has.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: im:history)",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"markDirectMessageChannel",
            "description": "This method moves the read cursor in a direct message channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: im:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to set reading cursor in.",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the most recently seen message.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"openDirectMessageChannel",
            "description": "This method opens a direct message channel with another member of your Slack team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: im:write)",
                },
                {
                    name: "user",
                    type: "String",
                    info: "User to open a direct message channel with.",
                },
                {
                    name: "returnIm",
                    type: "String",
                    info: "Boolean, indicates you want the full IM channel definition in the response.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getAccessToken",
            "description": "This method allows you to exchange a temporary OAuth code for an API access token. This is used as part of the OAuth authentication flow.",
            "args":[
                {
                    name: "clientId",
                    type: "String",
                    info: "Issued when you created your application.",
                },
                {
                    name: "clientSecret",
                    type: "String",
                    info: "Issued when you created your application.",
                },
                {
                    name: "code",
                    type: "String",
                    info: "The code param returned via the OAuth callback.",
                },
                {
                    name: "redirectUri",
                    type: "String",
                    info: "This must match the originally submitted URI (if one was sent).",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"closeMultipartyDirectMessageChannel",
            "description": "This method closes a multiparty direct message channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: mpim:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Multiparty Direct Message Channel to close.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info':'Success'
                }
            ]
        }, {
            "name":"getMultipartyDirectMessageChannelHistory",
            "description": "This method returns a portion of messages/events from the specified multiparty direct message channel. To read the entire history for a multiparty direct message, call the method with no latest or oldest arguments, and then continue paging using the instructions below.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: mpim:history)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to fetch.",
                },
                {
                    name: "latest",
                    type: "String",
                    info: "End of time range of messages to include in results.",
                },
                {
                    name: "oldest",
                    type: "String",
                    info: "Start of time range of messages to include in results.",
                },
                {
                    name: "inclusive",
                    type: "Number",
                    info: "Include messages with latest or oldest timestamp in results.",
                },
                {
                    name: "count",
                    type: "Number",
                    info: "Number of messages to return, between 1 and 1000.",
                },
                {
                    name: "unreads",
                    type: "String",
                    info: "Include unread_count_display in the output?",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getMultipartyDirectMessageChannels",
            "description": "This method returns a list of all multiparty direct message channels that the user has.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: mpim:write)",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"markMultipartyDirectMessageChannel",
            "description": "This method moves the read cursor in a multiparty direct message channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: mpim:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to set reading cursor in.",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the most recently seen message.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteChat",
            "description": "This method deletes a message from a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: chat:write:bot or chat:write:user)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel containing the message to be deleted.",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to be deleted.",
                },
                {
                    name: "asUser",
                    type: "String",
                    info: "Pass true to delete the message as the authed user. Bot users in this context are considered authed users.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"openMultipartyDirectMessageChannel",
            "description": "This method opens a multiparty direct message.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: channels:write)",
                },
                {
                    name: "users",
                    type: "String",
                    info: "Comma separated lists of users. The ordering of the users is preserved whenever a MPIM group is returned.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {    
            "name":"sendMeMessage",
            "description": "This method sends a me message to a channel from the calling user.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: chat:write:bot or chat:write:user)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel containing the message to be deleted.",
                },
                {
                    name: "text",
                    type: "String",
                    info: "Text of the message to send.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"postMessage",
            "description": "This method posts a message to a public channel, private channel, or direct message/IM channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: chat:write:bot or chat:write:user)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel containing the message to be deleted.",
                },
                {
                    name: "text",
                    type: "String",
                    info: "Text of the message to send.",
                },
                {
                    name: "parse",
                    type: "String",
                    info: "Change how messages are treated.",
                },
                {
                    name: "linkNames",
                    type: "String",
                    info: "Find and link channel names and usernames.",
                },
                {
                    name: "attachments",
                    type: "JSON",
                    info: "Structured message attachments.",
                },
                {
                    name: "unfurlLinks",
                    type: "String",
                    info: "Pass true to enable unfurling of primarily text-based content.",
                },
                {
                    name: "unfurlMedia",
                    type: "String",
                    info: "Pass false to disable unfurling of media content.",
                },
                {
                    name: "username",
                    type: "String",
                    info: "Set your bot's user name. Must be used in conjunction with as_user set to false, otherwise ignored.  See authorship below.",
                },
                {
                    name: "asUser",
                    type: "String",
                    info: "Pass true to post the message as the authed user, instead of as a bot. Defaults to false.",
                },
                {
                    name: "iconUrl",
                    type: "String",
                    info: "URL to an image to use as the icon for this message. Must be used in conjunction with as_user  set to false, otherwise ignored. ",
                },
                {
                    name: "iconEmoji",
                    type: "String",
                    info: "Emoji to use as the icon for this message. Overrides icon_url. Must be used in conjunction with as_user  set to false, otherwise ignored.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateMessage",
            "description": "This method updates a message in a channel. Though related to chat.postMessage, some parameters of chat.update are handled differently.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: chat:write:bot or chat:write:user)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel containing the message to be deleted.",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to be updated.",
                },
                {
                    name: "text",
                    type: "String",
                    info: "Text of the message to send.",
                },
                {
                    name: "parse",
                    type: "String",
                    info: "Change how messages are treated.",
                },
                {
                    name: "linkNames",
                    type: "String",
                    info: "Find and link channel names and usernames.",
                },
                {
                    name: "attachments",
                    type: "JSON",
                    info: "Structured message attachments.",
                },
                {
                    name: "asUser",
                    type: "String",
                    info: "Pass true to post the message as the authed user, instead of as a bot. Defaults to false.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"endDoNotDisturb",
            "description": "Ends the user's currently scheduled Do Not Disturb session immediately.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: dnd:write)",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"endSnooze",
            "description": "Ends the current user's snooze mode immediately.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: dnd:write)",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getDoNotDisturbInfo",
            "description": "Provides information about a user's current Do Not Disturb settings.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: dnd:write)",
                },
                {
                    name: "user",
                    type: "String",
                    info: "User to fetch status for (defaults to current user)",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setSnooze",
            "description": "Adjusts the snooze duration for a user's Do Not Disturb settings. If a snooze session is not already active for the user, invoking this method will begin one for the specified duration.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: dnd:write)",
                },
                {
                    name: "numMinutes",
                    type: "Number",
                    info: "Number of minutes, from now, to snooze until.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTeamUserDoNotDisturbInfo",
            "description": "Provides information about the current Do Not Disturb settings for users of a Slack team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: dnd:read)",
                },
                {
                    name: "users",
                    type: "Number",
                    info: "Comma-separated list of users to fetch Do Not Disturb status for.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTeamCustomEmoji",
            "description": "This method lists the custom emoji for a team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: emoji:read)",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"addFileComment",
            "description": "Add a comment to an existing file.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to add a comment to.",
                },
                {
                    name: "comment",
                    type: "String",
                    info: "Text of the comment to add.",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel id (encoded) of which location to associate with the new comment.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteFileComment",
            "description": "Delete an existing comment on a file. Only the original author of the comment or a Team Administrator may delete a file comment.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to delete a comment from.",
                },
                {
                    name: "id",
                    type: "String",
                    info: "The comment to delete.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateFileComment",
            "description": "Edit an existing comment on a file. Only the user who created a comment may make edits. Teams may configure a limited time window during which file comment edits are allowed.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to update a comment from.",
                },
                {
                    name: "id",
                    type: "String",
                    info: "The comment to update.",
                },
                {
                    name: "comment",
                    type: "String",
                    info: "Text of the comment to edit.",
                },

            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteFile",
            "description": "This method deletes a file from your team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "ID of file to delete.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"uploadFile",
            "description": "This method allows you to create or upload an existing file.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File contents via multipart/form-data.",
                },
                {
                    name: "filetype",
                    type: "String",
                    info: "A file type identifier.",
                },
                {
                    name: "filename",
                    type: "String",
                    info: "Filename of file.",
                },
                {
                    name: "title",
                    type: "String",
                    info: "Title of file.",
                },
                {
                    name: "initialComment",
                    type: "String",
                    info: "Initial comment to add to file.",
                },
                {
                    name: "channels",
                    type: "String",
                    info: "Comma-separated list of channel names or IDs where the file will be shared.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getFileInfo",
            "description": "This method returns information about a file in your team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: files:read)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "Specify a file by providing its ID.",
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of items to return per page.",
                },
                {
                    name: "page",
                    type: "String",
                    info: "Page number of results to return.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTeamFiles",
            "description": "This method returns a list of files within the team. It can be filtered and sliced in various ways.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: files:read)",
                },
                {
                    name: "user",
                    type: "String",
                    info: "Filter files created by a single user.",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Filter files appearing in a specific channel, indicated by its ID.",
                },
                {
                    name: "timestampFrom",
                    type: "String",
                    info: "Filter files created after this timestamp (inclusive).",
                },
                {
                    name: "timestampTo",
                    type: "String",
                    info: "Filter files created before this timestamp (inclusive).",
                },
                {
                    name: "types",
                    type: "String",
                    info: "Filter files by type: `all` - All files; `spaces` - Posts; `snippets` - Snippets; `images` - Image files; `gdocs` - Google docs; `zips` - Zip files; `pdfs` - PDF files. You can pass multiple values in the types argument like types=spaces,snippets.The default value is all, which does not filter the list.",
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of items to return per page.",
                },
                {
                    name: "page",
                    type: "String",
                    info: "Page number of results to return.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"disableFileSharing",
            "description": "This method disables public/external sharing for a file.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to revoke.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"enableFileSharing",
            "description": "This method enables public/external sharing for a file.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: files:write:user)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to revoke.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"pinItemToChannel",
            "description": "This method pins an item (file, file comment, channel message, or group message) to a particular channel. The channel argument is required and one of file, file_comment, or timestamp must also be specified.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: pins:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to pin the item in.",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to pin.",
                },
                {
                    name: "fileComment",
                    type: "String",
                    info: "File comment to pin.",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: " Timestamp of the message to pin.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getChannelPinnedItems",
            "description": "This method lists the items pinned to a channel.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Requires scope: pins:read",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel fetch pins.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"unpinItemFromChannel",
            "description": "This method un-pins an item (file, file comment, channel message, or group message) from a channel. The channel argument is required and one of file, file_comment, or timestamp must also be specified.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: pins:write)",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to pin the item in.",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to un-pin.",
                },
                {
                    name: "fileComment",
                    type: "String",
                    info: "File comment to un-pin.",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: " Timestamp of the message to un-pin.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"addReaction",
            "description": "This method adds a reaction (emoji) to an item (file, file comment, channel message, group message, or direct message). One of file, file_comment, or the combination of channel and timestamp must be specified.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: pins:write)",
                },
                {
                    name: "name",
                    type: "String",
                    info: "Reaction (emoji) name.",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to add reaction to.",
                },
                {
                    name: "fileComment",
                    type: "String",
                    info: "File comment to add reaction to.",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel where the message to add reaction to was posted.",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to add reaction to.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getReaction",
            "description": "This method returns a list of all reactions for a single item (file, file comment, channel message, group message, or direct message).",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: pins:write)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to get reaction to.",
                },
                {
                    name: "fileComment",
                    type: "String",
                    info: "File comment to get reaction to.",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel where the message to get reaction to was posted.",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to get reaction to.",
                },
                {
                    name: "full",
                    type: "String",
                    info: "If true always return the complete reaction list.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getReactions",
            "description": "This method returns a list of all items (file, file comment, channel message, group message, or direct message) reacted to by a user.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: pins:write)",
                },
                {
                    name: "user",
                    type: "String",
                    info: "Show reactions made by this user. Defaults to the authed user.",
                },
                {
                    name: "full",
                    type: "String",
                    info: "If true always return the complete reaction list.",
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of items to return per page.",
                },
                {
                    name: "page",
                    type: "String",
                    info: "Page number of results to return.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"removeReaction",
            "description": "This method removes a reaction (emoji) from an item (file, file comment, channel message, group message, or direct message). One of file, file_comment, or the combination of channel and timestamp must be specified.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: pins:write)",
                },
                {
                    name: "name",
                    type: "String",
                    info: "Reaction (emoji) name.",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to remove reaction from.",
                },
                {
                    name: "fileComment",
                    type: "String",
                    info: "File comment to remove reaction from.",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel where the message to remove reaction from was posted.",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to remove reaction from.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"startRealTimeMessaging",
            "description": "This method starts a Real Time Messaging API session. Refer to the RTM API documentation for full details on how to use the RTM API.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: pins:write)",
                },
                {
                    name: "simpleLatest",
                    type: "String",
                    info: "Return timestamp only for latest message object of each channel (improves performance).",
                },
                {
                    name: "noUnreads",
                    type: "String",
                    info: "Skip unread counts for each channel (improves performance).",
                },
                {
                    name: "mpimAware",
                    type: "String",
                    info: "Returns MPIMs to the client in the API response.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"searchItem",
            "description": "This method allows users and applications to search both messages and files in a single call.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: pins:write)",
                },
                {
                    name: "query",
                    type: "String",
                    info: "Search query. May contains booleans, etc.",
                },
                {
                    name: "sort",
                    type: "String",
                    info: "Return matches sorted by either score or timestamp.",
                },
                {
                    name: "sortDir",
                    type: "String",
                    info: "Change sort direction to ascending (asc) or descending (desc).",
                },
                {
                    name: "highlight",
                    type: "Number",
                    info: "Pass a value of 1 to enable query highlight markers (see below).",
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of items to return per page.",
                },
                {
                    name: "page",
                    type: "String",
                    info: "Page number of results to return.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"addStar",
            "description": "This method adds a star to an item (message, file, file comment, channel, private group, or DM) on behalf of the authenticated user. One of file, file_comment, channel, or the combination of channel and timestamp must be specified.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: starts:write)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to add star to.",
                },
                {
                    name: "fileComment",
                    type: "String",
                    info: "File comment to add star to.",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to add star to, or channel where the message to add star to was posted (used with timestamp).",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to add star to.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getStars",
            "description": "This method lists the items starred by the authed user.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: starts:read)",
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of items to return per page.",
                },
                {
                    name: "page",
                    type: "String",
                    info: "Page number of results to return.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"removeStar",
            "description": "This method removes a star from an item (message, file, file comment, channel, private group, or DM) on behalf of the authenticated user. One of file, file_comment, channel, or the combination of channel and timestamp must be specified.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: starts:write)",
                },
                {
                    name: "file",
                    type: "String",
                    info: "File to remove star from.",
                },
                {
                    name: "fileComment",
                    type: "String",
                    info: "File comment to remove star from.",
                },
                {
                    name: "channel",
                    type: "String",
                    info: "Channel to remove star to, or channel where the message to remove star to was posted (used with timestamp).",
                },
                {
                    name: "timestamp",
                    type: "String",
                    info: "Timestamp of the message to remove star from.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTeamInfo",
            "description": "This method provides information about your team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: team:read)",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTeamProfile",
            "description": "This method is used to get the profile field definitions for this team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: users.profile:read)",
                },
                {
                    name: "visibility",
                    type: "String",
                    info: "Filter by visibility. (all)",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getAccessLogs",
            "description": "This method is used to get the access logs for users on a team.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: admin).",
                },
                {
                    name: "count",
                    type: "String",
                    info: "Number of items to return per page.",
                },
                {
                    name: "page",
                    type: "String",
                    info: "Page number of results to return.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createUserGroup",
            "description": "This method is used to create a User Group.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope usergroups:write).",
                },
                {
                    name: "name",
                    type: "String",
                    info: "A name for the User Group. Must be unique among User Groups.",
                },
                {
                    name: "handle",
                    type: "String",
                    info: "A mention handle. Must be unique among channels, users and User Groups.",
                },
                {
                    name: "description",
                    type: "String",
                    info: "A short description of the User Group.",
                },
                {
                    name: "channels",
                    type: "String",
                    info: "A comma separated string of encoded channel IDs for which the User Group uses as a default.",
                },
                {
                    name: "includeCount",
                    type: "String",
                    info: "Include the number of users in each User Group.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"disableUserGroup",
            "description": "This method disables an existing User Group.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: usergroups:write).",
                },
                {
                    name: "usergroup",
                    type: "String",
                    info: "The encoded ID of the User Group to disable.",
                },
                {
                    name: "includeСount",
                    type: "String",
                    info: "Include the number of users in the User Group.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"enableUserGroup",
            "description": "This method enables a User Group which was previously disabled.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: usergroups:write).",
                },
                {
                    name: "usergroup",
                    type: "String",
                    info: "The encoded ID of the User Group to enable.",
                },
                {
                    name: "includeСount",
                    type: "String",
                    info: "Include the number of users in the User Group.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUserGroups",
            "description": "This method returns a list of all User Groups in the team. This can optionally include disabled User Groups.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: usergroups:read).",
                },
                {
                    name: "includeDisabled",
                    type: "String",
                    info: "Include disabled User Groups.",
                },
                {
                    name: "includeСount",
                    type: "String",
                    info: "Include the number of users in each User Group.",
                },
                {
                    name: "includeUsers",
                    type: "String",
                    info: "Include the list of users for each User Group.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateUserGroup",
            "description": "This method updates the properties of an existing User Group.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: usergroups:write).",
                },
                {
                    name: "usergroup",
                    type: "String",
                    info: "The encoded ID of the User Group to update.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "A name for the User Group. Must be unique among User Groups.",
                },
                {
                    name: "handle",
                    type: "String",
                    info: "A mention handle. Must be unique among channels, users and User Groups.",
                },
                {
                    name: "description",
                    type: "String",
                    info: "A short description of the User Group.",
                },
                {
                    name: "channels",
                    type: "String",
                    info: "A comma separated string of encoded channel IDs for which the User Group uses as a default.",
                },
                {
                    name: "includeCount",
                    type: "String",
                    info: "Include the number of users in the User Group.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUserGroupUsers",
            "description": "This method returns a list of all users within a User Group.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: usergroups:write).",
                },
                {
                    name: "usergroup",
                    type: "String",
                    info: "The encoded ID of the User Group to update.",
                },
                {
                    name: "includeDisabled",
                    type: "String",
                    info: "Include the number of users in the User Group.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"updateUserGroupUsers",
            "description": "This method updates the list of users that belong to a User Group. This method replaces all users in a User Group with the list of users provided in the users parameter.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: usergroups:write)",
                },
                {
                    name: "usergroup",
                    type: "String",
                    info: "The encoded ID of the User Group to update.",
                },
                {
                    name: "users",
                    type: "String",
                    info: "A comma separated string of encoded user IDs that represent the entire list of users for the User Group.",
                },
                {
                    name: "includeCount",
                    type: "Number",
                    info: "Include the number of users in the User Group.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUserProfile",
            "description": "This method is used to get the profile information for a user.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: users.profile:read)",
                },
                {
                    name: "user",
                    type: "String",
                    info: "User to retrieve profile info for.",
                },
                {
                    name: "includeLabels",
                    type: "Number",
                    info: "Include labels for each ID in custom profile fields. (0)",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setUserProfile",
            "description": "This method is used to set the profile information for a user.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: users.profile:write)",
                },
                {
                    name: "user",
                    type: "String",
                    info: "ID of user to change. This argument may only be specified by team admins on paid teams.",
                },
                {
                    name: "profile",
                    type: "JSON",
                    info: "Collection of key:value pairs presented as a URL-encoded JSON hash.",
                },
                {
                    name: "name",
                    type: "String",
                    info: "Name of a single key to set. Usable only if profile is not passed.",
                },
                {
                    name: "value",
                    type: "String",
                    info: "Value to set a single key to. Usable only if profile is not passed.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteUserProfilePhoto",
            "description": "This method allows the user to delete their profile image. It will clear whatever image is currently set.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: users.profile:write)",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUserPresence",
            "description": "This method lets you find out information about a user's presence. Consult the presence documentation for more details.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: users:read)",
                },
                {
                    name: "user",
                    type: "String",
                    info: "User to get presence info on. Defaults to the authed user.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUserIdentity",
            "description": "After your Slack app is awarded an identity token through Sign in with Slack, use this method to retrieve a user's identity.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: identity.basic)",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getUser",
            "description": "This method returns information about a team member.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: users:read)",
                },
                {
                    name: "user",
                    type: "String",
                    info: "User to get presence info on. Defaults to the authed user.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getTeamUsers",
            "description": "This method returns a list of all users in the team. This includes deleted/deactivated users.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: users:read)",
                },
                {
                    name: "presence",
                    type: "String",
                    info: "Whether to include presence data in the output.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setUserActive",
            "description": "This method lets the slack messaging server know that the authenticated user is currently active.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: users:write)",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setPhoto",
            "description": "This method allows the user to set their profile image. The caller can pass image data via image.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: users:write)",
                },
                {
                    name: "image",
                    type: "String",
                    info: "File contents.",
                },
                {
                    name: "cropX",
                    type: "Number",
                    info: "X coordinate of top-left corner of crop box.",
                },
                {
                    name: "cropY",
                    type: "Number",
                    info: "Y coordinate of top-left corner of crop box.",
                },
                {
                    name: "cropW",
                    type: "Number",
                    info: "Width/height of crop box (always square).",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"setUserPresence",
            "description": "This method lets you set the calling user's manual presence. Consult the presence documentation for more details.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: users:write)",
                },
                {
                    name: "presence",
                    type: "String",
                    info: "Either auto or away.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"markReminderComplete",
            "description": "This method completes a reminder.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: users:write)",
                },
                {
                    name: "reminder",
                    type: "String",
                    info: "The ID of the reminder to be marked as complete.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"createReminder",
            "description": "This method creates a reminder.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: reminders:write)",
                },
                {
                    name: "text",
                    type: "String",
                    info: "The content of the reminder.",
                },
                {
                    name: "time",
                    type: "String",
                    info: 'When this reminder should happen: the Unix timestamp (up to five years from now), the number of seconds until the reminder (if within 24 hours), or a natural language description (Ex. "in 15 minutes," or "every Thursday")',
                },
                {
                    name: "user",
                    type: "String",
                    info: "The user who will receive the reminder. If no user is specified, the reminder will go to user who created it.",
                },
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"deleteReminder",
            "description": "This method deletes a reminder.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: users:write)",
                },
                {
                    name: "reminder",
                    type: "String",
                    info: "The ID of the reminder to delete.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getSingleReminder",
            "description": "This method returns information about a reminder.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: users:write)",
                },
                {
                    name: "reminder",
                    type: "String",
                    info: "The ID of the reminder.",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        }, {
            "name":"getReminders",
            "description": "This method lists all reminders created by or for a given user.",
            "args":[
                {
                    name: "token",
                    type: "credentials",
                    info: "Authentication token (Requires scope: users:read)",
                }
            ],
            'callbacks':[
                {
                    'name':'error',
                    'info': 'Error'
                },
                {
                    'name':'success',
                    'info': 'Success'
                }
            ]
        },]
    })
};