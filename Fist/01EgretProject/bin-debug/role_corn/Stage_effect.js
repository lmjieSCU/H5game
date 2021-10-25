var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Stage_effect = (function () {
    function Stage_effect() {
        this.skill_loader = [];
        this.eff_vs = [];
        this.camera_obj = null;
        return;
    }
    Stage_effect.clert = function () {
        Stage_effect.zoom_number = 0;
        Stage_effect.effectContainer = null; //添加全屏背景层
        Stage_effect.superface = null; //人物头像
        Stage_effect.freezeTime = 0; //暂停多少帧
        Stage_effect.shakedir = 0;
        Stage_effect.showAnimation = null;
        Stage_effect.eff_num = 0;
        _level0.effect_mc = new Stage_effect();
    };
    //打击特效
    Stage_effect.prototype.hitFire = function (_hitType, hitFire_x, hitFire_y, role) {
        if (SplashScene.CloseEffects) {
            return;
        }
        var num = SplashScene.hero_layer.globalToLocal(hitFire_x, hitFire_y);
        var _loc4;
        var _loc2 = _hitType;
        if (_hitType == "hitFire1") {
            _loc4 = Math.random();
            if (_loc4 < 0.500000) {
                _loc2 = "hitFire_kof_1";
            }
            else {
                _loc2 = "hitFire1";
            } // end if
        } // end else if
        var skill_class = eval(role._roleName + "_Skill");
        var skill = new skill_class(_loc2, role);
        skill.skill_mc.x = num.x;
        skill.skill_mc.y = num.y;
        if (role.dir == -1) {
            skill.skill_mc.skewY = 180;
        }
        SplashScene.hero_layer.addChild(skill.skill_mc);
        // skill.skill_mc.play();
        this.skill_loader.push(skill);
    }; // End of the function
    //着地特效
    Stage_effect.prototype.downEff = function (hitType, role) {
        if (SplashScene.CloseEffects) {
            return;
        }
        var skill_class = eval(role._roleName + "_Skill");
        var skill = new skill_class(hitType, role);
        skill.skill_mc.x = role.x;
        skill.skill_mc.y = role.y;
        if (role.dir == -1) {
            skill.skill_mc.skewY = 180;
        }
        SplashScene.hero_layer.addChild(skill.skill_mc);
        this.skill_loader.push(skill);
        // skill.skill_mc.play();
    }; // End of the function
    //全屏背景
    Stage_effect.prototype.bgEff_start = function (s_type, role) {
        if (SplashScene.CloseEffects) {
            return;
        }
        var bgEff_mc;
        if (_level0.deepCompare(role, _level0.P1_role)) {
            bgEff_mc = this.bgEff_mc1;
        }
        else {
            bgEff_mc = this.bgEff_mc2;
        }
        if (s_type == "" || s_type == undefined) {
            this.bgEff_end(bgEff_mc);
            return;
        } // end if
        if (bgEff_mc != null) {
            this.bgEff_end(bgEff_mc);
        }
        var skill_class = eval(role._roleName + "_Skill");
        bgEff_mc = new skill_class(s_type, role);
        var scaleX = GameConfig.FightWidth / bgEff_mc.skill_mc.measuredWidth;
        var scaleY = UI.WINSIZE_H / bgEff_mc.skill_mc.measuredHeight;
        var _x = 0;
        if (s_type == "bgEff_up" || s_type == "bgEff_up2") {
            scaleY = UI.WINSIZE_H / bgEff_mc.skill_mc.measuredHeight * 2.5;
        }
        else if (s_type == "bgEff_speed1" || s_type == "bgEff_speed3") {
            scaleX = GameConfig.FightWidth / bgEff_mc.skill_mc.measuredWidth * 2;
            _x = GameConfig.FightWidth;
        }
        else if (s_type == "bgEff_up3") {
            scaleX += 0.4;
            scaleY += 0.4;
            _x = GameConfig.FightWidth;
        }
        bgEff_mc.skill_mc.scaleY = scaleY;
        bgEff_mc.skill_mc.scaleX = scaleX;
        if (role.dir == -1) {
            if (s_type != "bgEff_up" && s_type != "bgEff_up2") {
                bgEff_mc.skill_mc.skewY = 180;
                bgEff_mc.skill_mc.x = GameConfig.FightWidth;
            }
        }
        bgEff_mc.skill_mc.play();
        if (_level0.deepCompare(role, _level0.P1_role)) {
            this.bgEff_mc1 = bgEff_mc;
        }
        else {
            this.bgEff_mc2 = bgEff_mc;
        }
        Stage_effect.effectContainer.addChild(bgEff_mc.skill_mc);
        FightMainRender.getInstance().Add(role, Stage_effect.onbgEff_end, [role, this]);
    }; // End of the function
    Stage_effect.onbgEff_end = function (role, owner) {
        if (role.status_1 == "stand" || role.status_3 == "hurt" || role.status_3 == "normal" || role.isKO || role.opp.isKO) {
            var bgEff_mc = void 0;
            if (_level0.deepCompare(role, _level0.P1_role)) {
                bgEff_mc = owner.bgEff_mc1;
            }
            else {
                bgEff_mc = owner.bgEff_mc2;
            }
            owner.bgEff_end(bgEff_mc);
            FightMainRender.getInstance().Remove(role, Stage_effect.onbgEff_end);
        }
    };
    //全屏背景回收
    Stage_effect.prototype.bgEff_end = function (bgEff_mc) {
        if (bgEff_mc != undefined && bgEff_mc.skill_mc.parent) {
            Stage_effect.effectContainer.removeChild(bgEff_mc.skill_mc);
            // this.bgEff_mc=null;
        }
    }; // End of the function
    //屏幕闪耀
    Stage_effect.prototype.bgShineHit = function (type, role) {
        if (SplashScene.CloseEffects) {
            return;
        }
        var skill_class = eval(role._roleName + "_Skill");
        var skill = new skill_class("bgShinngHit", role);
        skill.skill_mc.scaleY = UI.WINSIZE_H / skill.skill_mc.measuredHeight * 2;
        skill.skill_mc.scaleX = GameConfig.FightWidth / skill.skill_mc.measuredWidth * 2;
        role.stage.addChild(skill.skill_mc);
        //this.skill_loader.push(skill);
        skill.skill_mc.gotoAndStop("show" + type);
        //console.log(`show${type}`);
        egret.Tween.get(skill.skill_mc, { loop: false })
            .to({ alpha: 0 }, 50).call(function () { skill.skill_mc.parent.removeChild(skill.skill_mc); });
    }; // End of the function
    Stage_effect.prototype.fgEff_start = function (s_type, fromMC) {
        // if (s_type == "")
        // {
        //     this.fgEff_end();
        //     return;
        // } // end if
        // var _loc3 = _root.effect_mc_fg.attachMovie(s_type, "fgEff", depth_bgEff1);
        // _loc3.mc._xscale = _loc3.mc._xscale * fromMC._parent.dir;
        // _loc3._x = -_root.char_mc._x;
        // _loc3._y = 0;
        // var owner = this;
        // fromMC.onUnload = function ()
        // {
        //     owner.fgEff_end();
        // };
    }; // End of the function
    Stage_effect.prototype.fgEff_end = function () {
        //_root.effect_mc_fg.unloadMovie();
    }; // End of the function
    //技能全屏效果
    Stage_effect.prototype.superStart = function (s_type, time_f, dx, dy, bgType, roleName, dir, fromMC, role) {
        if (SplashScene.CloseEffects) {
            return;
        }
        if (bgType == undefined) {
            return;
        }
        var skill_class = eval(role._roleName + "_Skill");
        // dx=num.x;
        // dy=num.y;
        //背景  
        if (bgType != "") {
            var skill3 = new skill_class("bgEff_super" + bgType, role);
            skill3.skill_mc.x = UI.WINSIZE_W / 2;
            skill3.skill_mc.y = UI.WINSIZE_H / 2;
            skill3.skill_mc.scaleY = UI.WINSIZE_H / skill3.skill_mc.measuredHeight;
            skill3.skill_mc.scaleX = UI.WINSIZE_W / skill3.skill_mc.measuredWidth;
            if (dir == -1) {
                skill3.skill_mc.skewY = 180;
            }
            skill3.skill_mc.play();
            Stage_effect.effectContainer.addChild(skill3.skill_mc);
            this.skill_loader.push(skill3);
        }
        //人物头像 //待修改
        if (roleName != "") {
            var image = new egret.Bitmap;
            var path = "superface_" + roleName + bgType + "_png";
            image.texture = RES.getRes(path);
            if (bgType == "1") {
                this.animation(image, role);
            }
            else {
                image.alpha = 0;
                image.y = 0;
                image.scaleX = 3;
                image.scaleY = 3;
                image.x = GameConfig.FightWidth / 2 - image.measuredWidth;
                var scaleX = UI.WINSIZE_H / image.measuredHeight;
                var scaleY = UI.WINSIZE_H / image.measuredHeight;
                if (dir == -1) {
                    image.skewY = 180;
                    image.x = GameConfig.FightWidth / 2 + image.measuredWidth;
                }
                Stage_effect.effectContainer.addChild(image);
                egret.Tween.get(image, { loop: false })
                    .to({ scaleX: scaleX, scaleY: scaleY, alpha: 1 }, 100)
                    .to({ x: image.x + 50 * role.dir }, 1000);
                image["type"] = 2;
            }
            Stage_effect.superface = image;
        }
        //缩放多少
        var zoom_number = 0;
        if (s_type == "s1" || s_type == "s1_s") {
            zoom_number = 0.3;
        }
        else if (s_type == "s2") {
            zoom_number = 0.4;
        }
        //蓄力效果
        if (s_type != undefined) {
            var skill = new skill_class(s_type, role);
            skill.skill_mc.x = dx - role.width * zoom_number * dir;
            skill.skill_mc.y = dy - role.height / 2 * zoom_number;
            if (dir == -1) {
                skill.skill_mc.skewY = 180;
            }
            skill.skill_mc.play();
            SplashScene.hero_layer.addChild(skill.skill_mc);
            this.skill_loader.push(skill);
            //蓄力特效2
            if (s_type == "s1") {
                var skill2 = new skill_class(s_type + "_bg", role);
                skill2.skill_mc.x = dx;
                skill2.skill_mc.y = dy;
                if (dir == -1) {
                    skill2.skill_mc.skewY = 180;
                }
                skill2.skill_mc.play();
                this.skill_loader.push(skill2);
                SplashScene.hero_layer.addChild(skill2.skill_mc);
            }
        }
        //暂停多少帧
        this.superFreeze(time_f, role);
        //UI界面放大缩小
        if (s_type == "s1" || s_type == "s1_s" || s_type == "s2") {
            Stage_effect.zoomControl_mc(zoom_number, role);
        }
    }; // End of the function
    //暂停多少帧
    Stage_effect.prototype.superFreeze = function (f, role) {
        Stage_effect.freezeTime = f;
        _level0.P1_role.inFreeze = true;
        _level0.P2_role.inFreeze = true;
        var _loc2 = this;
        this.render_hitFreeze_action = this.render_superFreeze;
        this.render_hitFreeze_params = [this.skill_loader, role];
    }; // End of the function
    Stage_effect.prototype.render_superFreeze = function (skill_loader, role) {
        if (_level0.inPause) {
            return;
        } // end if
        if (Stage_effect.freezeTime <= 4) {
            if (Stage_effect.superface != null) {
                var str = Stage_effect.superface["type"];
                if (str == "1") {
                    Stage_effect.superface.x += GameConfig.FightWidth / 4 * role.dir;
                }
                else {
                    egret.Tween.get(Stage_effect.superface, { loop: false })
                        .to({ scaleX: 3, scaleY: 3, alpha: 0 }, 1000 / 30 * 4);
                }
            }
        }
        if (Stage_effect.freezeTime == 1) {
            Stage_effect.zoomControl_mc_primary();
        } // end if
        if (Stage_effect.freezeTime > 0) {
            --Stage_effect.freezeTime;
        }
        else {
            _level0.P1_role.inFreeze = false;
            _level0.P2_role.inFreeze = false;
            // P1_bodyMC.resetFrameStop();
            // P2_bodyMC.resetFrameStop();
            // _level0.P1_role.suspend = false;
            // _level0.P2_role.suspend = false;
            _level0.P1_role.skill_restart();
            _level0.P2_role.skill_restart();
            FightMainRender.getInstance().Remove(role, this.render_superFreeze);
            FightMainRender.getInstance().Remove(this, this.upAnimation);
            if (Stage_effect.superface != null && Stage_effect.superface.parent) {
                Stage_effect.superface.parent.removeChild(Stage_effect.superface);
            }
            if (Stage_effect.showAnimation != null && Stage_effect.showAnimation.parent) {
                Stage_effect.showAnimation.parent.removeChild(Stage_effect.showAnimation);
            }
            Stage_effect.superface = null;
            this.render_hitFreeze_action = undefined;
        }
    };
    Stage_effect.prototype.animation = function (superface, role) {
        if (Stage_effect.showAnimation == null) {
            Stage_effect.showAnimation = new egret.DisplayObjectContainer();
            Stage_effect.showAnimation.y = 50;
            Stage_effect.showAnimation.width = GameConfig.FightWidth;
            Stage_effect.showAnimation.height = UI.WINSIZE_H / 2;
            for (var i = 1; i <= 6; i++) {
                var eff = UI.addPic(Stage_effect.showAnimation, "eff_vs_bg000" + i + "_png", 0, 0, false);
                eff.scaleX = Stage_effect.showAnimation.width / eff.width;
                eff.scaleY = Stage_effect.showAnimation.height / eff.height;
                eff.alpha = 1;
                this.eff_vs.push(eff);
            }
            var square = new egret.Shape();
            square.graphics.beginFill(0xff0000);
            square.graphics.drawRect(0, 0, Stage_effect.showAnimation.width, Stage_effect.showAnimation.height);
            square.graphics.endFill();
            Stage_effect.showAnimation.addChild(square);
            Stage_effect.showAnimation.mask = square;
        }
        superface.scaleX = Stage_effect.showAnimation.height / superface.measuredHeight;
        superface.scaleY = Stage_effect.showAnimation.height / superface.measuredHeight;
        superface.x = -superface.measuredWidth;
        var lo_x = 120;
        if (role.dir == -1) {
            superface.skewY = 180;
            superface.x = GameConfig.FightWidth;
            lo_x = GameConfig.FightWidth - 120;
        }
        egret.Tween.get(superface).to({ x: lo_x }, 1000 / 30 * 4);
        Stage_effect.showAnimation.addChild(superface);
        Stage_effect.effectContainer.addChild(Stage_effect.showAnimation);
        superface["type"] = 1;
        FightMainRender.getInstance().Add(this, this.upAnimation);
    };
    Stage_effect.prototype.upAnimation = function () {
        if (Stage_effect.eff_num >= this.eff_vs.length)
            Stage_effect.eff_num = 0;
        for (var i = 0; i < this.eff_vs.length; i++) {
            this.eff_vs[i].alpha = 0;
        }
        this.eff_vs[Stage_effect.eff_num].$setAlpha(1);
        Stage_effect.eff_num++;
    };
    //KO特效
    Stage_effect.prototype.KO_Freeze = function (time_f, KO_type, role) {
        // if (isKO)
        // {
        //     return;
        // } // end if
        // isKO = true;
        _level0.P1_role.inFreeze = true;
        _level0.P2_role.inFreeze = true;
        this.KO_eff(KO_type, role);
        this.render_hitFreeze_action = this.KO_onEnterFrame;
        this.render_hitFreeze_params = [time_f, role];
    }; // End of the function
    Stage_effect.prototype.KO_onEnterFrame = function (time_f, role) {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.bgEffKO_mc.skill_mc.getCurrFrame() < this.bgEffKO_mc.skill_mc.getTotalFrame()) {
            --time_f;
        }
        else {
            Stage_effect.zoomControl_mc_primary();
            //this.isKO = false;
            _level0.P1_role.inFreeze = false;
            _level0.P2_role.inFreeze = false;
            this.KO_eff_end(role);
            this.showOK_txt(role);
            this.render_hitFreeze_action = undefined;
        } // end else if
    };
    //攻击目标后冻结帧数
    Stage_effect.prototype.hitFreeze = function (freezeTime, slowTime, role) {
        if (SplashScene.CloseEffects) {
            return;
        }
        if (role.isKO) {
            return;
        } // end if
        Stage_effect.freezeTime = freezeTime;
        _level0.P1_role.inFreeze = true;
        _level0.P2_role.inFreeze = true;
        this.render_hitFreeze_action = this.render_hitFreeze;
        this.render_hitFreeze_params = [role];
    }; // End of the function
    Stage_effect.prototype.render_hitFreeze = function (role) {
        if (_level0.inPause) {
            return;
        } // end if
        if (role.isKO) {
            return;
        } // end if
        if (Stage_effect.shakedir == -1) {
            Stage_effect.shakedir = 1;
            role.x = role.x + 2;
        }
        else {
            Stage_effect.shakedir = -1;
            role.x = role.x - 2;
        } // end else if
        if (Stage_effect.freezeTime > 1) {
            Stage_effect.freezeTime = Stage_effect.freezeTime - 1;
        }
        else {
            _level0.P1_role.inFreeze = false;
            _level0.P2_role.inFreeze = false;
            this.render_hitFreeze_action = undefined;
        } // end else if
    };
    Stage_effect.prototype.getFireFrame = function () {
        // var _loc4 = _level0.P1_role.skill_loader;
        // var _loc3 = _level0.P2_role.skill_loader;
        // var _loc2;
        // for (var _loc6 in _loc4)
        // {
        //     _loc2 = _loc4[_loc6];
        //     if (_loc2 instanceof MovieClip)
        //     {
        //         fireFrame_p1[_loc6] = {mc: _loc2, frame: _loc2._currentframe};
        //     } // end if
        // } // end of for...in
        // for (var _loc6 in _loc3)
        // {
        //     _loc2 = _loc3[_loc6];
        //     if (_loc2 instanceof MovieClip)
        //     {
        //         fireFrame_p2[_loc6] = {mc: _loc2, frame: _loc2._currentframe};
        //     } // end if
        // } // end of for...in
    }; // End of the function
    Stage_effect.prototype.checkFireFrame = function () {
        // var _loc2;
        // for (var _loc3 in fireFrame_p1)
        // {
        //     _loc2 = fireFrame_p1[_loc3];
        //     if (_loc2.mc._currentframe == _loc2.frame)
        //     {
        //         firePlay_p1[_loc3] = false;
        //     } // end if
        // } // end of for...in
        // for (var _loc3 in fireFrame_p2)
        // {
        //     _loc2 = fireFrame_p2[_loc3];
        //     if (_loc2.mc._currentframe == _loc2.frame)
        //     {
        //         firePlay_p2[_loc3] = false;
        //     } // end if
        // } // end of for...in
        // fireFrame_p1 = {};
        // fireFrame_p2 = {};
    }; // End of the function
    Stage_effect.prototype.fire_stop = function () {
        // var _loc3 = _level0.P1_role.skill_loader;
        // var _loc2 = _level0.P2_role.skill_loader;
        // for (var _loc4 in _loc3)
        // {
        //     _loc3[_loc4].stop();
        // } // end of for...in
        // for (var _loc4 in _loc2)
        // {
        //     _loc2[_loc4].stop();
        // } // end of for...in
        // for (var _loc4 in this)
        // {
        //     this[_loc4].stop();
        // } // end of for...in
    }; // End of the function
    Stage_effect.prototype.fire_continue = function () {
        // var _loc4 = _level0.P1_role.skill_loader;
        // var _loc3 = _level0.P2_role.skill_loader;
        // for (var _loc5 in _loc4)
        // {
        //     var _loc2 = _loc4[_loc5];
        //     if (firePlay_p1[_loc2._name] == false)
        //     {
        //         continue;
        //     } // end if
        //     _loc2.play();
        // } // end of for...in
        // for (var _loc5 in _loc3)
        // {
        //     _loc2 = _loc3[_loc5];
        //     if (firePlay_p2[_loc2._name] == false)
        //     {
        //         continue;
        //     } // end if
        //     _loc2.play();
        // } // end of for...in
        // firePlay_p1 = [];
        // firePlay_p2 = [];
        // for (var _loc5 in this)
        // {
        //     this[_loc5].play();
        // } // end of for...in
    }; // End of the function
    Stage_effect.prototype.showOK_txt = function (role) {
        var skill_class = eval(role._roleName + "_Skill");
        this.element_mc = new skill_class("KO_mc", role);
        this.element_mc.skill_mc.x = GameConfig.FightWidth / 2;
        this.element_mc.skill_mc.y = UI.WINSIZE_H / 2;
        this.element_mc.skill_mc.resetFrameStop();
        this.skill_loader.push(this.element_mc);
        SplashScene.hero_layer.stage.addChild(this.element_mc.skill_mc);
    }; // End of the function
    Stage_effect.prototype.endOK_txt = function () {
    }; // End of the function
    Stage_effect.prototype.KO_camera = function (role) {
        var _loc3 = (_level0.P1_role.x + _level0.P2_role.x) / 2;
        var _loc2 = (_level0.P1_role.y - 100 + (_level0.P2_role.y - 100)) / 2;
        var skill_class = eval(role._roleName + "_Skill");
        this.camera_obj = new skill_class("shinning_g", role);
        this.camera_obj.skill_mc.resetFrameStop();
        this.camera_obj.skill_mc.scaleX = GameConfig.FightWidth / this.camera_obj.skill_mc.measuredWidth;
        this.camera_obj.skill_mc.scaleY = UI.WINSIZE_H / this.camera_obj.skill_mc.measuredHeight;
        this.camera_obj.skill_mc.x = _loc3;
        this.camera_obj.skill_mc.y = _loc2;
        this.skill_loader.push(this.camera_obj);
        SplashScene.hero_layer.addChild(this.camera_obj.skill_mc);
    }; // End of the function
    Stage_effect.prototype.KO_camera_end = function () {
        if (this.camera_obj != null && this.camera_obj.skill_mc.parent) {
            this.camera_obj.skill_mc.parent.removeChild(this.camera_obj.skill_mc);
        }
    }; // End of the function
    Stage_effect.prototype.KO_eff = function (KO_type, role) {
        var _loc3;
        var skill_class = eval(role._roleName + "_Skill");
        if (KO_type == "2") {
            _loc3 = "bgEff_KO2";
            this.bgEffKO_mc = new skill_class(_loc3, role);
            this.bgEffKO_mc.skill_mc.resetFrameStop();
            Stage_effect.effectContainer.addChild(this.bgEffKO_mc.skill_mc);
        }
        else {
            _loc3 = "bgEff_KO";
            this.bgEffKO_mc = new skill_class(_loc3, role);
            Stage_effect.effectContainer.addChild(this.bgEffKO_mc.skill_mc);
            this.bgEffKO_mc.skill_mc.resetFrameStop();
            // _level0.P1_role.changeColor("black");
            // _level0.P2_role.changeColor("black");
            // this.changeColor(_level0.P1_mc, "black");
            // this.changeColor(_level0.P2_mc, "black");
            // this.changeColor(_level0.effect_mc, "black");
            this.KO_camera(role);
        } // end else if
        this.bgEffKO_mc.skill_mc.scaleX = GameConfig.FightWidth / this.bgEffKO_mc.skill_mc.measuredWidth;
        this.bgEffKO_mc.skill_mc.scaleY = UI.WINSIZE_H / this.bgEffKO_mc.skill_mc.measuredHeight;
        this.skill_loader.push(this.bgEffKO_mc);
        var _loc4;
        if (_level0.deepCompare(role, _level0.P1_role)) {
            _loc4 = _level0.P1_role;
        }
        else {
            _loc4 = _level0.P2_role;
        } // end else if
        Stage_effect.zoomControl_mc(0.6, _loc4);
        // _level0.zoomControl_mc.zoomIn(_level0.char_mc, _loc4, 1.300000, 0.600000);
    }; // End of the function
    Stage_effect.prototype.KO_eff_end = function (role) {
        if (this.bgEffKO_mc.skill_mc.parent) {
            this.bgEffKO_mc.skill_mc.parent.removeChild(this.bgEffKO_mc.skill_mc);
        }
        // _level0.P1_role.changeColor("normal");
        // _level0.P2_role.changeColor("normal");
        // this.changeColor(_level0.effect_mc, "normal");
        this.KO_camera_end();
    }; // End of the function
    Stage_effect.prototype.changeColor = function (char, cc) {
        // var _loc2 = new Color(char);
        // var _loc3 = colorObj[cc];
        // _loc2.setTransform(_loc3);
    }; // End of the function
    Stage_effect.prototype.slowEff = function (time) {
        // {
        //     _root.slowSound_mc.slow_start(time);
        // } // End of the function
        // var KO_time = 15;
        // var depth_bgEff1 = 1000;
        // var depth_bgEff2 = 1100;
        // var depth_bgEff3 = 1200;
        // var depth_bgEff4 = 1300;
        // var fireFrame_p1 = new Object();
        // var fireFrame_p2 = new Object();
        // var firePlay_p1 = new Object();
        // var firePlay_p2 = new Object();
    }; // End of Class
    //放大多少
    Stage_effect.zoomControl_mc = function (zoom_number, role) {
        Stage_effect.zoomControl_mc_primary();
        SplashScene.hero_layer.scaleY += zoom_number;
        SplashScene.hero_layer.scaleX += zoom_number;
        SplashScene.hero_layer.y = -UI.WINSIZE_H * zoom_number;
        if (role.dir == -1) {
            SplashScene.hero_layer.x = (-GameConfig.FightWidth * zoom_number) - (role.x - GameConfig.FightWidth) * zoom_number;
        }
        else {
            SplashScene.hero_layer.x = -role.x * zoom_number;
        }
    };
    //返原大小
    Stage_effect.zoomControl_mc_primary = function () {
        SplashScene.hero_layer.scaleY = 1;
        SplashScene.hero_layer.scaleX = 1;
        SplashScene.hero_layer.y = 0;
        SplashScene.hero_layer.x = 0;
    };
    Stage_effect.prototype.renderAnimate = function (owner) {
        for (var index in owner.skill_loader) {
            if (owner.skill_loader[index].skill_mc.stage) {
                owner.skill_loader[index].renderMcAnimate();
            }
            else {
                owner.skill_loader.splice(Number(index), 1);
            }
        }
        if (owner.render_hitFreeze_action != undefined) {
            (_a = owner.render_hitFreeze_action).call.apply(_a, [owner].concat(owner.render_hitFreeze_params));
        }
        var _a;
    };
    Stage_effect.prototype.start = function () {
        FightMainRender.getInstance().Add("Stage_effect", this.renderAnimate, [this]);
    }; // End of the function
    Stage_effect.zoom_number = 0;
    Stage_effect.showAnimation = null;
    Stage_effect.eff_num = 0;
    return Stage_effect;
}());
__reflect(Stage_effect.prototype, "Stage_effect");
//# sourceMappingURL=Stage_effect.js.map