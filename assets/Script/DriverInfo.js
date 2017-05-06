cc.Class({
    extends: cc.Component,

    properties: {
        GameData: {
            default: null,
            type: require('GameData')            
        },
        infos: {
            default: [],
            type: [cc.Label]
        },                
        driverHead: {
            default: null,
            type: cc.Node
        },
    },

    // use this for initialization
    onLoad: function () {

    },

    showDriverInfo: function(event) {
        var self = this;

        if (!event.detail.show) {
            self.node.opacity = 0;
            return;
        }

        self.node.opacity = 255;

        var robot = event.detail.robot;
        // cc.log('robot.driverHead = ' + robot.driverHead);        
        cc.loader.loadRes(robot.driverHead, cc.SpriteFrame, function (err, spriteFrame) {
            self.driverHead.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        var infosIndex = [
            'POST',
            'DRIVER',
        ];
        for (var i = 0; i < self.infos.length; i++) {
            self.infos[i].string = self.GameData.getRobot(robot.id)[infosIndex[i]];
        }                                                                                       
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});