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
    name: 'bring-them-back-home-now',
    title: 'תחזירו אותם הביתה עכשיו',
    areas: [{
        "date": "14.1.2024 10:00:00",
        values: []
    }],
    bg: {
        mobile: "https://ameinu.net/wp-content/uploads/2023/11/bringthemhomenow.png",
        desktop: "https://ameinu.net/wp-content/uploads/2023/11/bringthemhomenow.png"
    },
    header: {
        style: {
            mobile: {
                height: '280px',
                backgroundPositionY: 'bottom'
            },
            desktop: {
                height: '380px',
                backgroundColor: '#010309',
                backgroundPosition: 'right top'
            }
        }
    },
    base: {
        capacity: 136, //gatesCapacity.west.g_206 + gatesCapacity.west.g_206 ,
        free: 136,
        taken: 0
    },
    link: "https://stories.bringthemhomenow.net/",
    closedGates: []
}