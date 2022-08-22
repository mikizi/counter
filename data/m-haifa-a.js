var gatesCapacity = {
    east: {
        g_501: 211,
        g_502: 388,
        g_503: 327,
        g_504: 388,
        g_505: 388,
        g_506: 388,
        g_601: 222,
        g_602: 347,
        g_603: 445,
        g_604: 503,
        g_605: 480,
        g_606: 501,
        g_607: 443,

    },
    west: {
        "g_101": 202,
        "g_102": 389,
        "g_103": 326,
        "g_104": 118,
        "g_106": 117,
        "g_107": 324,
        "g_108": 389,
        "g_109": 203,
        "g_201": 220,
        "g_202": 331,
        "g_203": 439,
        "g_204": 462,
        "g_205": 200,
        "g_206": 459,
        "g_207": 439,
        "g_208": 332,
        "g_209": 222,
        "g_105_C": 325,
        "g_105_L": 239,
        "g_105_R": 241
    }
};

var data = {
    title: 'מכבי חיפה - מכבי נתניה',
    date: new Date(2022, 7, 27, 20, 0, 0),
    areas: [
        {
            "date": "22.8.2022 20:53:14",
            "values": "[{\"id\":0,\"guid\":\"4a40558f-8403-49c0-a2d8-52a677c60693\",\"name\":\"130\",\"type\":\"ReservedSeating\",\"capacity\":485,\"free\":374,\"coords\":\"424,305,470,305,470,331,465,342,425,323,424,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"yellow\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":80}},\"middle\":{\"x\":449.6357421875,\"y\":319.438598632813}},{\"id\":0,\"guid\":\"9a38478f-d551-4645-bc07-566ce3f44317\",\"name\":\"131\",\"type\":\"ReservedSeating\",\"capacity\":450,\"free\":370,\"coords\":\"409,331,419,329,422,325,463,345,461,351,445,366,437,369,423,336,411,339,409,331\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"yellow\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":80}},\"middle\":{\"x\":438.21728515625,\"y\":345.767883300781}},{\"id\":0,\"guid\":\"9805b2db-8b13-4a66-a9c4-ec76f7f81c28\",\"name\":\"132\",\"type\":\"ReservedSeating\",\"capacity\":81,\"free\":39,\"coords\":\"418,377,433,372,421,342,412,344,418,377\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"yellow\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":80}},\"middle\":{\"x\":421.358978271484,\"y\":360.145294189453}},{\"id\":0,\"guid\":\"7cfb0de0-0c5a-4b13-82b5-01a43a64e9d9\",\"name\":\"236\",\"type\":\"ReservedSeating\",\"capacity\":354,\"free\":352,\"coords\":\"472,305,510,305,509,343,470,336,472,331,472,305\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":80}},\"middle\":{\"x\":491.274688720703,\"y\":322.373474121094}},{\"id\":0,\"guid\":\"52d62921-1727-4076-af16-fce0eba425e0\",\"name\":\"237\",\"type\":\"ReservedSeating\",\"capacity\":315,\"free\":279,\"coords\":\"464,352,469,339,509,346,496,376,464,352\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":80}},\"middle\":{\"x\":486.932678222656,\"y\":354.25341796875}},{\"id\":0,\"guid\":\"0ee6f1ef-2c98-414a-983c-51ab703a4e00\",\"name\":\"238\",\"type\":\"ReservedSeating\",\"capacity\":316,\"free\":280,\"coords\":\"447,368,462,354,494,379,469,405,447,368\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":80}},\"middle\":{\"x\":469.172119140625,\"y\":377.969390869141}},{\"id\":0,\"guid\":\"b036043c-3c13-43e1-be82-542e12b6c6f5\",\"name\":\"239\",\"type\":\"ReservedSeating\",\"capacity\":218,\"free\":190,\"coords\":\"426,378,445,370,462,398,437,409,426,378\",\"view\":null,\"boundries\":{\"top\":0,\"right\":0,\"bottom\":0,\"left\":0},\"soldOut\":false,\"backgroundImage\":{\"url\":\"\",\"width\":0,\"height\":0},\"stagePosition\":\"TOP\",\"hall\":{\"stageImage\":null,\"id\":\"68dd6b03-e662-412e-9f8c-2a2b0716a2ad\",\"name\":\"אצטדיון סמי עופר - חיפה\"},\"displayStyles\":{\"o\":{\"name\":\"מכור\",\"displayStyle\":\"#000066\"},\"c\":{\"name\":\"נתפס בידי\",\"displayStyle\":\"#33cc00\"},\"44d385e7-c979-4136-8825-78267de05c79\":{\"letter\":\"a\",\"name\":\"יציע אורחים\",\"displayStyle\":\"#000000\"}},\"oColor\":\"green\",\"priceLevels\":[\"44d385e7-c979-4136-8825-78267de05c79\"],\"priceList\":{\"9071b182-b426-4dad-9af8-e23a20a17807\":{\"44d385e7-c979-4136-8825-78267de05c79\":80}},\"middle\":{\"x\":442.805633544922,\"y\":389.447570800781}}]"
        }
    ],
    bg: {
        mobile: "https://leaan.co.il/LeanWebLink/1159/get.resource/images/1033/1007283.jpg?etag=08696B9A8C61EBBEB40A2248379BD96C",
        desktop: "https://leaan.co.il/LeanWebLink/1159/get.resource/images/1037/1007282.jpg?etag=BB547D8257D2C963EEE93278158F25B6"
    },
    header: {
        style: {
            mobile: {
                height: '320px',
                backgroundPositionY: 'bottom'
            },
            desktop: {
                height: '480px',
                backgroundColor: '#010309'
            }
        }
    },
    base: {
        capacity: 0, //gatesCapacity.west.g_206 + gatesCapacity.west.g_206 ,
        free: 0,
        taken: 0
    },
    link: 'https://leaan.co.il/he-IL/events/%d7%9e%d7%9b%d7%91%d7%99%20%d7%97%d7%99%d7%a4%d7%94%20-%20%d7%9e%d7%9b%d7%91%d7%99%20%d7%a0%d7%aa%d7%a0%d7%99%d7%94/2022-8-27_20.00/%d7%90%d7%a6%d7%98%d7%93%d7%99%d7%95%d7%9f%20%d7%a1%d7%9e%d7%99%20%d7%a2%d7%95%d7%a4%d7%a8%20-%20%d7%97%d7%99%d7%a4%d7%94?hallmap',
    closedGates: []
}