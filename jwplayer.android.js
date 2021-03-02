import { android as androidApp } from '@nativescript/core/application';
import { srcProperty, JWPlayerBase } from "./jwplayer.common"

let JWEventHandler1;

function initializeJWEventHandler() {
    if (JWEventHandler1) {
        return;
    }

    var JWEventHandler = /** @class */ (function (_super) {
        __extends(JWEventHandler, _super);
        function JWEventHandler(owner) {
            var _this = _super.call(this) || this;
            _this._owner = owner;
            return global.__native(_this);
        }
        JWEventHandler.prototype.onAudioTracks = function (audioTracksEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnAudioTracksEvent, object: this._owner, eventData: audioTracksEvent });
        }
        JWEventHandler.prototype.onBeforeComplete = function (beforeCompleteEvent) {
            this._owner.notify({ eventName: JWPlayerBase.AdvertisingEventsOnBeforeCompleteEvent, object: this._owner, eventData: beforeCompleteEvent });
        }
        JWEventHandler.prototype.onBeforePlay = function (beforePlayEvent) {
            this._owner.notify({ eventName: JWPlayerBase.AdvertisingEventsOnBeforePlayEvent, object: this._owner, eventData: beforePlayEvent });
        }
        JWEventHandler.prototype.onBuffer = function (bufferEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnBufferEvent, object: this._owner, eventData: bufferEvent });
        }
        JWEventHandler.prototype.onCaptionsList = function (captionsListEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnCaptionsListEvent, object: this._owner, eventData: captionsListEvent });
        }
        JWEventHandler.prototype.onComplete = function (completeEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnCompleteEvent, object: this._owner, eventData: completeEvent });
        }
        JWEventHandler.prototype.onFullscreen = function (fullscreen) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnFullscreenEvent, object: this._owner, eventData: fullscreen });
        }
        JWEventHandler.prototype.onIdle = function (idleEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnIdleEvent, object: this._owner, eventData: idleEvent });
        }
        JWEventHandler.prototype.onMeta = function (metaEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnMetaEvent, object: this._owner, eventData: metaEvent });
        }
        JWEventHandler.prototype.onPause = function (pauseEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnPauseEvent, object: this._owner, eventData: pauseEvent });
        }
        JWEventHandler.prototype.onPlay = function (playEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnPlayEvent, object: this._owner, eventData: playEvent });
        }
        JWEventHandler.prototype.onPlaylistComplete = function (playlistCompleteEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnPlaylistCompleteEvent, object: this._owner, eventData: playlistCompleteEvent });
        }
        JWEventHandler.prototype.onPlaylistItem = function (playlistItemEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnPlaylistItemEvent, object: this._owner, eventData: playlistItemEvent });
        }
        JWEventHandler.prototype.onPlaylist = function (playlistEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnPlaylistEvent, object: this._owner, eventData: playlistEvent });
        }
        JWEventHandler.prototype.onSeek = function (seekEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnSeekEvent, object: this._owner, eventData: seekEvent });
        }
        JWEventHandler.prototype.onSetupError = function (setupErrorEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnSetupErrorEvent, object: this._owner, eventData: setupErrorEvent });
        }
        JWEventHandler.prototype.onTime = function (timeEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnTimeEvent, object: this._owner, eventData: timeEvent });
        }
        JWEventHandler.prototype.onAdError = function (adErrorEvent) {
            this._owner.notify({ eventName: JWPlayerBase.AdvertisingEventsOnAdErrorEvent, object: this._owner, eventData: adErrorEvent });
        }
        JWEventHandler.prototype.onError = function (errorEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnErrorEvent, object: this._owner, eventData: errorEvent });
        }
        JWEventHandler.prototype.onLevelsChanged = function (levelsChangedEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnLevelsChangedEvent, object: this._owner, eventData: levelsChangedEvent });
        }
        JWEventHandler.prototype.onLevels = function (levelsEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnLevelsEvent, object: this._owner, eventData: levelsEvent });
        }
        JWEventHandler.prototype.onAudioTrackChanged = function (audioTrackChangedEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnAudioTrackChangedEvent, object: this._owner, eventData: audioTrackChangedEvent });
        }
        JWEventHandler.prototype.onCaptionsChanged = function (list) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnCaptionsChangedEvent, object: this._owner, eventData: list });
        }
        JWEventHandler.prototype.onAdClick = function (adClickEvent) {
            this._owner.notify({ eventName: JWPlayerBase.AdvertisingEventsOnAdClickEvent, object: this._owner, eventData: adClickEvent });
        }
        JWEventHandler.prototype.onAdComplete = function (adCompleteEvent) {
            this._owner.notify({ eventName: JWPlayerBase.AdvertisingEventsOnAdCompleteEvent, object: this._owner, eventData: adCompleteEvent });
        }
        JWEventHandler.prototype.onAdSkipped = function (adSkippedEvent) {
            this._owner.notify({ eventName: JWPlayerBase.AdvertisingEventsOnAdSkippedEvent, object: this._owner, eventData: adSkippedEvent });
        }
        JWEventHandler.prototype.onAdImpression = function (adImpressionEvent) {
            this._owner.notify({ eventName: JWPlayerBase.AdvertisingEventsOnAdImpressionEvent, object: this._owner, eventData: adImpressionEvent });
        }
        JWEventHandler.prototype.onAdTime = function (adTimeEvent) {
            this._owner.notify({ eventName: JWPlayerBase.AdvertisingEventsOnAdTimeEvent, object: this._owner, eventData: adTimeEvent });
        }
        JWEventHandler.prototype.onAdPause = function (adPauseEvent) {
            this._owner.notify({ eventName: JWPlayerBase.AdvertisingEventsOnAdPauseEvent, object: this._owner, eventData: adPauseEvent });
        }
        JWEventHandler.prototype.onAdPlay = function (adPlayEvent) {
            this._owner.notify({ eventName: JWPlayerBase.AdvertisingEventsOnAdPlayEvent, object: this._owner, eventData: adPlayEvent });
        }
        JWEventHandler.prototype.onSeeked = function (seekedEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnSeekedEvent, object: this._owner, eventData: seekedEvent });
        }
        JWEventHandler.prototype.onControls = function (controlsEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnControlsEvent, object: this._owner, eventData: controlsEvent });
        }
        JWEventHandler.prototype.onDisplayClick = function (displayClickEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnDisplayClickEvent, object: this._owner, eventData: displayClickEvent });
        }
        JWEventHandler.prototype.onVisualQuality = function (visualQuality) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnVisualQualityEvent, object: this._owner, eventData: visualQuality });
        }
        JWEventHandler.prototype.onMute = function (muteEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnMuteEvent, object: this._owner, eventData: muteEvent });
        }
        JWEventHandler.prototype.onFirstFrame = function (firstFrameEvent) {
            this._owner.notify({ eventName: JWPlayerBase.VideoPlayerEventsOnFirstFrameEvent, object: this._owner, eventData: firstFrameEvent });
        }
        JWEventHandler.prototype.onAdSchedule = function (adScheduleEvent) {
            this._owner.notify({ eventName: JWPlayerBase.AdvertisingEventsOnAdScheduleEvent, object: this._owner, eventData: adScheduleEvent });
        }

        JWEventHandler = __decorate([
            Interfaces([
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnSetupErrorListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnPlaylistListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnPlaylistItemListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnPlayListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnPauseListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnBufferListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnIdleListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnErrorListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnSeekListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnTimeListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnFullscreenListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnAudioTracksListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnAudioTrackChangedListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnCaptionsListListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnMetaListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnPlaylistCompleteListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnCompleteListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnLevelsChangedListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnLevelsListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnCaptionsChangedListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnControlsListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnDisplayClickListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnMuteListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnSeekedListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnVisualQualityListener,
                com.longtailvideo.jwplayer.events.listeners.VideoPlayerEvents.OnFirstFrameListener,
                com.longtailvideo.jwplayer.events.listeners.AdvertisingEvents.OnAdClickListener,
                com.longtailvideo.jwplayer.events.listeners.AdvertisingEvents.OnAdCompleteListener,
                com.longtailvideo.jwplayer.events.listeners.AdvertisingEvents.OnAdSkippedListener,
                com.longtailvideo.jwplayer.events.listeners.AdvertisingEvents.OnAdErrorListener,
                com.longtailvideo.jwplayer.events.listeners.AdvertisingEvents.OnAdImpressionListener,
                com.longtailvideo.jwplayer.events.listeners.AdvertisingEvents.OnAdTimeListener,
                com.longtailvideo.jwplayer.events.listeners.AdvertisingEvents.OnAdPauseListener,
                com.longtailvideo.jwplayer.events.listeners.AdvertisingEvents.OnAdPlayListener,
                com.longtailvideo.jwplayer.events.listeners.AdvertisingEvents.OnAdScheduleListener,
                com.longtailvideo.jwplayer.events.listeners.AdvertisingEvents.OnBeforePlayListener,
                com.longtailvideo.jwplayer.events.listeners.AdvertisingEvents.OnBeforeCompleteListener
            ])
        ], JWEventHandler);
        return JWEventHandler;
    }(java.lang.Object));
    JWEventHandler1 = JWEventHandler;
}


export class JWPlayer extends JWPlayerBase {
    constructor() {
        super();
    }
    createNativeView() {
        let i = new com.longtailvideo.jwplayer.JWPlayerView(androidApp.foregroundActivity, null);
        i.setLayoutParams(new android.view.ViewGroup.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT));
        this._android = i;
        return this._android;
    }
    initNativeView() {
        
        initializeJWEventHandler();
        this._handler = new JWEventHandler1(this);
        this._android.addOnFirstFrameListener(this._handler);
        this._android.addOnSetupErrorListener(this._handler);
        this._android.addOnPlaylistListener(this._handler);
        this._android.addOnPlaylistItemListener(this._handler);
        this._android.addOnPlayListener(this._handler);
        this._android.addOnPauseListener(this._handler);
        this._android.addOnBufferListener(this._handler);
        this._android.addOnIdleListener(this._handler);
        this._android.addOnErrorListener(this._handler);
        this._android.addOnSeekListener(this._handler);
        this._android.addOnTimeListener(this._handler);
        this._android.addOnFullscreenListener(this._handler);
        this._android.addOnLevelsChangedListener(this._handler);
        this._android.addOnLevelsListener(this._handler);
        this._android.addOnCaptionsListListener(this._handler);
        this._android.addOnCaptionsChangedListener(this._handler);
        //  this._android.addOnRelatedCloseListener(this._android);
        //  this._android.addOnRelatedOpenListener(this._android);
        //  this._android.addOnRelatedPlayListener(this._android);
        this._android.addOnControlsListener(this._handler);
        this._android.addOnDisplayClickListener(this._handler);
        this._android.addOnMuteListener(this._handler);
        this._android.addOnVisualQualityListener(this._handler);
        this._android.addOnSeekedListener(this._handler);
        this._android.addOnAdClickListener(this._handler);
        this._android.addOnAdCompleteListener(this._handler);
        this._android.addOnAdSkippedListener(this._handler);
        this._android.addOnAdErrorListener(this._handler);
        this._android.addOnAdImpressionListener(this._handler);
        this._android.addOnAdTimeListener(this._handler);
        this._android.addOnAdPauseListener(this._handler);
        this._android.addOnAdPlayListener(this._handler);
        this._android.addOnMetaListener(this._handler);
        this._android.addOnPlaylistCompleteListener(this._handler);
        this._android.addOnCompleteListener(this._handler);
        this._android.addOnBeforePlayListener(this._handler);
        this._android.addOnBeforeCompleteListener(this._handler);
        this._android.addOnAdScheduleListener(this._handler);

        androidApp.on('activityDestroyed', () => {
            this._android.onDestroy();
        });
        androidApp.on('activityNewIntent', () => { });
        androidApp.on('activityPaused', () => {
            this._android.onPause();
        });
        androidApp.on('activityStarted', () => {
            this._android.onStart();
        });
        androidApp.on('activityResumed', () => {
            this._android.onResume();
        });
        androidApp.on('activityStopped', () => {
            this._android.onStop();
        });
    }

    [srcProperty.getDefault]() {
        return undefined;
    }
    [srcProperty.setNative](value) {
        if (value && this._android) {
            let pi = new com.longtailvideo.jwplayer.media.playlists.PlaylistItem.Builder().file(value.url).title(value.title).description(value.description).build();
            this._android.load(pi);
        }
    }
}