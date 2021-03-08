import { View, Property } from '@nativescript/core';

export class JWPlayerBase extends View {
    
}

JWPlayerBase.VideoPlayerEventsOnSetupErrorEvent = 'videoPlayerEventsOnSetupErrorEvent';
JWPlayerBase.VideoPlayerEventsOnPlaylistEvent = 'videoPlayerEventsOnPlaylistEvent';
JWPlayerBase.VideoPlayerEventsOnPlaylistItemEvent = 'videoPlayerEventsOnPlaylistItemEvent';
JWPlayerBase.VideoPlayerEventsOnPlayEvent = 'videoPlayerEventsOnPlayEvent';
JWPlayerBase.VideoPlayerEventsOnPauseEvent = 'videoPlayerEventsOnPauseEvent';
JWPlayerBase.VideoPlayerEventsOnBufferEvent = 'videoPlayerEventsOnBufferEvent';
JWPlayerBase.VideoPlayerEventsOnIdleEvent = 'videoPlayerEventsOnIdleEvent';
JWPlayerBase.VideoPlayerEventsOnErrorEvent = 'videoPlayerEventsOnErrorEvent';
JWPlayerBase.VideoPlayerEventsOnSeekEvent = 'videoPlayerEventsOnSeekEvent';
JWPlayerBase.VideoPlayerEventsOnTimeEvent = 'videoPlayerEventsOnTimeEvent';
JWPlayerBase.VideoPlayerEventsOnFullscreenEvent = 'videoPlayerEventsOnFullscreenEvent';
JWPlayerBase.VideoPlayerEventsOnAudioTracksEvent = 'videoPlayerEventsOnAudioTracksEvent';
JWPlayerBase.VideoPlayerEventsOnAudioTrackChangedEvent = 'videoPlayerEventsOnAudioTrackChangedEvent';
JWPlayerBase.VideoPlayerEventsOnCaptionsListEvent = 'videoPlayerEventsOnCaptionsListEvent';
JWPlayerBase.VideoPlayerEventsOnMetaEvent = 'videoPlayerEventsOnMetaEvent';
JWPlayerBase.VideoPlayerEventsOnPlaylistCompleteEvent = 'videoPlayerEventsOnPlaylistCompleteEvent';
JWPlayerBase.VideoPlayerEventsOnCompleteEvent = 'videoPlayerEventsOnCompleteEvent';
JWPlayerBase.VideoPlayerEventsOnLevelsChangedEvent = 'videoPlayerEventsOnLevelsChangedEvent';
JWPlayerBase.VideoPlayerEventsOnLevelsEvent = 'videoPlayerEventsOnLevelsEvent';
JWPlayerBase.VideoPlayerEventsOnCaptionsChangedEvent = 'videoPlayerEventsOnCaptionsChangedEvent';
JWPlayerBase.VideoPlayerEventsOnControlsEvent = 'videoPlayerEventsOnControlsEvent';
JWPlayerBase.VideoPlayerEventsOnDisplayClickEvent = 'videoPlayerEventsOnDisplayClickEvent';
JWPlayerBase.VideoPlayerEventsOnMuteEvent = 'videoPlayerEventsOnMuteEvent';
JWPlayerBase.VideoPlayerEventsOnSeekedEvent = 'videoPlayerEventsOnSeekedEvent';
JWPlayerBase.VideoPlayerEventsOnVisualQualityEvent = 'videoPlayerEventsOnVisualQualityEvent';
JWPlayerBase.VideoPlayerEventsOnFirstFrameEvent = 'videoPlayerEventsOnFirstFrameEvent';
JWPlayerBase.AdvertisingEventsOnAdClickEvent = 'advertisingEventsOnAdClickEvent';
JWPlayerBase.AdvertisingEventsOnAdCompleteEvent = 'advertisingEventsOnAdCompleteEvent';
JWPlayerBase.AdvertisingEventsOnAdSkippedEvent = 'advertisingEventsOnAdSkippedEvent';
JWPlayerBase.AdvertisingEventsOnAdErrorEvent = 'advertisingEventsOnAdErrorEvent';
JWPlayerBase.AdvertisingEventsOnAdImpressionEvent = 'advertisingEventsOnAdImpressionEvent';
JWPlayerBase.AdvertisingEventsOnAdTimeEvent = 'advertisingEventsOnAdTimeEvent';
JWPlayerBase.AdvertisingEventsOnAdPauseEvent = 'advertisingEventsOnAdPauseEvent';
JWPlayerBase.AdvertisingEventsOnAdPlayEvent = 'advertisingEventsOnAdPlayEvent';
JWPlayerBase.AdvertisingEventsOnAdScheduleEvent = 'advertisingEventsOnAdScheduleEvent';
JWPlayerBase.AdvertisingEventsOnBeforePlayEvent = 'advertisingEventsOnBeforePlayEvent';
JWPlayerBase.AdvertisingEventsOnBeforeCompleteEvent = 'advertisingEventsOnBeforeCompleteEvent';


export const srcProperty = new Property({
    name: 'src'
});
srcProperty.register(JWPlayerBase);