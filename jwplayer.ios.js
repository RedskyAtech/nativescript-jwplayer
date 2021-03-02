import { layout } from '@nativescript/core/utils';
import { srcProperty, JWPlayerBase } from './jwplayer.common';
import { LayoutBase } from "@nativescript/core";

var JWPlayerDelegateImpl = /** @class */ (function (_super) {
    __extends(JWPlayerDelegateImpl, _super);
    function JWPlayerDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JWPlayerDelegateImpl.initWithOwner = function (owner) {
        var delegate = JWPlayerDelegateImpl.new();
        delegate._owner = owner;
        return delegate;
    };
    JWPlayerDelegateImpl.prototype.onBeforePlay = function () {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.AdvertisingEventsOnBeforePlayEvent,
                    object: owner,
                    eventData: undefined
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onFirstFrame = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnFirstFrameEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onPlay = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnPlayEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onPause = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnPauseEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onIdle = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnIdleEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    // JWPlayerDelegateImpl.prototype.onReady = function (event) {
    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };

    JWPlayerDelegateImpl.prototype.onBeforeComplete = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.AdvertisingEventsOnBeforeCompleteEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };

    JWPlayerDelegateImpl.prototype.onComplete = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnCompleteEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };

    JWPlayerDelegateImpl.prototype.onBuffer = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnBufferEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };

    // JWPlayerDelegateImpl.prototype.onBufferChange = function (event) {
    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };


    JWPlayerDelegateImpl.prototype.onTime = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnTimeEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };

    JWPlayerDelegateImpl.prototype.onSeek = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnSeekEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };


    JWPlayerDelegateImpl.prototype.onSeeked = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnSeekedEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };

    JWPlayerDelegateImpl.prototype.onMeta = function (event) {

        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnMetaEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onCaptionsList = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnCaptionsListEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };

    JWPlayerDelegateImpl.prototype.onCaptionsChanged = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnCaptionsChangedEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };

    JWPlayerDelegateImpl.prototype.onLevels = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnLevelsEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onLevelsChanged = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnLevelsChangedEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onAudioTracks = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnAudioTracksEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onAudioTrackChanged = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: WPlayerBase.VideoPlayerEventsOnAudioTrackChangedEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onPlaylist = function (event) {

        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnPlaylistEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onPlaylistItem = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnPlaylistItemEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onPlaylistComplete = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnPlaylistCompleteEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onFullscreen = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnFullscreenEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    // JWPlayerDelegateImpl.prototype.onFullscreenRequested = function (event) {
    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };


    // JWPlayerDelegateImpl.prototype.onResize = function (event) {
    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };

    JWPlayerDelegateImpl.prototype.onControls = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnControlsEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };

    JWPlayerDelegateImpl.prototype.onDisplayClick = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnDisplayClickEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    // JWPlayerDelegateImpl.prototype.onControlBarVisible = function (event) {
    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };
    // JWPlayerDelegateImpl.prototype.onPlaybackRateChanged = function (event) {
    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };

    // JWPlayerDelegateImpl.prototype.onViewable = function (event) {
    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };

    // JWPlayerDelegateImpl.prototype.onAdRequest = function (event) {
    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };

    JWPlayerDelegateImpl.prototype.onAdSkipped = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.AdvertisingEventsOnAdSkippedEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };

    JWPlayerDelegateImpl.prototype.onAdComplete = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.AdvertisingEventsOnAdCompleteEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onAdClick = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.AdvertisingEventsOnAdClickEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    // JWPlayerDelegateImpl.prototype.onAdCompanions = function (event) {
    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };
    JWPlayerDelegateImpl.prototype.onAdSchedule = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.AdvertisingEventsOnAdScheduleEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onAdImpression = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.AdvertisingEventsOnAdImpressionEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onAdPlay = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.AdvertisingEventsOnAdPlayEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onAdPause = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.AdvertisingEventsOnAdPauseEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onAdTime = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.AdvertisingEventsOnAdTimeEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };

    JWPlayerDelegateImpl.prototype.onAdError = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.AdvertisingEventsOnAdErrorEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    // JWPlayerDelegateImpl.prototype.onAdStarted = function (event) {
    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };
    // JWPlayerDelegateImpl.prototype.onAdMeta = function (event) {
    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };
    // JWPlayerDelegateImpl.prototype.onAdBreakStart = function (event) {
    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };
    // JWPlayerDelegateImpl.prototype.onAdBreakEnd = function (event) {

    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };

    // JWPlayerDelegateImpl.prototype.onAdWarning = function (event) {

    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };
    // JWPlayerDelegateImpl.prototype.onRelatedOpen = function (event) {

    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };
    // JWPlayerDelegateImpl.prototype.onRelatedClose = function (event) {

    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };
    // JWPlayerDelegateImpl.prototype.onRelatedPlay = function (event) {

    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };
    JWPlayerDelegateImpl.prototype.onError = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnErrorEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    JWPlayerDelegateImpl.prototype.onSetupError = function (event) {
        if (this._owner) {
            var owner = this._owner.get();
            if (owner) {
                owner.notify({
                    eventName: JWPlayerBase.VideoPlayerEventsOnSetupErrorEvent,
                    object: owner,
                    eventData: event
                });
            }
        }
    };
    // JWPlayerDelegateImpl.prototype.onWarning = function (event) {

    //     var owner = this._owner.get();
    //     if (owner) {
    //         owner.notify({
    //             eventName: 'onPause',
    //             object: owner,
    //             eventData: undefined
    //         });
    //     }
    // };

    JWPlayerDelegateImpl.ObjCProtocols = [JWPlayerDelegate];
    return JWPlayerDelegateImpl;
}(NSObject));


export class JWPlayer extends JWPlayerBase {
    constructor() {
        super();
        this._ios;
        this._handler;
    }
    createNativeView() {

        this.playerConfig = JWConfig.alloc().init();
        if (this.src && this.src.url) {
            this.playerConfig.file = this.src.url;
        }
        this.playerConfig.size = CGSizeMake(layout.toDevicePixels(this.parentNode.getActualSize().width) / layout.getDisplayDensity(), layout.toDevicePixels(this.parentNode.getActualSize().height) / layout.getDisplayDensity());

        let playerController = JWPlayerController.alloc().initWithConfig(this.playerConfig);
        playerController.clipsToBounds = true;
        this._player = playerController;
        this._player.delegate = JWPlayerDelegateImpl.initWithOwner(new WeakRef(this))

        if (this.parentNode instanceof LayoutBase) {
            this.parentNode.ios.addSubview(this._player.view);
        }

        return undefined;
    }
    initNativeView() {

    }

    [srcProperty.getDefault]() {
        return undefined;
    }
    [srcProperty.setNative](value) {
        if (value && value.url && this._player) {
            this.playerConfig.file(value.url)
        }
    }
}