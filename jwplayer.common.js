import { View, Property } from '@nativescript/core';

export class JWPlayerBase extends View {
    
}

JWPlayerBase.VideoPlayerEventsOnSetupErrorEvent = 'VideoPlayerEventsOnSetupErrorEvent';
JWPlayerBase.VideoPlayerEventsOnPlaylistEvent = 'VideoPlayerEventsOnPlaylistEvent';
JWPlayerBase.VideoPlayerEventsOnPlaylistItemEvent = 'VideoPlayerEventsOnPlaylistItemEvent';
JWPlayerBase.VideoPlayerEventsOnPlayEvent = 'VideoPlayerEventsOnPlayEvent';
JWPlayerBase.VideoPlayerEventsOnPauseEvent = 'VideoPlayerEventsOnPauseEvent';
JWPlayerBase.VideoPlayerEventsOnBufferEvent = 'VideoPlayerEventsOnBufferEvent';
JWPlayerBase.VideoPlayerEventsOnIdleEvent = 'VideoPlayerEventsOnIdleEvent';
JWPlayerBase.VideoPlayerEventsOnErrorEvent = 'VideoPlayerEventsOnErrorEvent';
JWPlayerBase.VideoPlayerEventsOnSeekEvent = 'VideoPlayerEventsOnSeekEvent';
JWPlayerBase.VideoPlayerEventsOnTimeEvent = 'VideoPlayerEventsOnTimeEvent';
JWPlayerBase.VideoPlayerEventsOnFullscreenEvent = 'VideoPlayerEventsOnFullscreenEvent';
JWPlayerBase.VideoPlayerEventsOnAudioTracksEvent = 'VideoPlayerEventsOnAudioTracksEvent';
JWPlayerBase.VideoPlayerEventsOnAudioTrackChangedEvent = 'VideoPlayerEventsOnAudioTrackChangedEvent';
JWPlayerBase.VideoPlayerEventsOnCaptionsListEvent = 'VideoPlayerEventsOnCaptionsListEvent';
JWPlayerBase.VideoPlayerEventsOnMetaEvent = 'VideoPlayerEventsOnMetaEvent';
JWPlayerBase.VideoPlayerEventsOnPlaylistCompleteEvent = 'VideoPlayerEventsOnPlaylistCompleteEvent';
JWPlayerBase.VideoPlayerEventsOnCompleteEvent = 'VideoPlayerEventsOnCompleteEvent';
JWPlayerBase.VideoPlayerEventsOnLevelsChangedEvent = 'VideoPlayerEventsOnLevelsChangedEvent';
JWPlayerBase.VideoPlayerEventsOnLevelsEvent = 'VideoPlayerEventsOnLevelsEvent';
JWPlayerBase.VideoPlayerEventsOnCaptionsChangedEvent = 'VideoPlayerEventsOnCaptionsChangedEvent';
JWPlayerBase.VideoPlayerEventsOnControlsEvent = 'VideoPlayerEventsOnControlsEvent';
JWPlayerBase.VideoPlayerEventsOnDisplayClickEvent = 'VideoPlayerEventsOnDisplayClickEvent';
JWPlayerBase.VideoPlayerEventsOnMuteEvent = 'VideoPlayerEventsOnMuteEvent';
JWPlayerBase.VideoPlayerEventsOnSeekedEvent = 'VideoPlayerEventsOnSeekedEvent';
JWPlayerBase.VideoPlayerEventsOnVisualQualityEvent = 'VideoPlayerEventsOnVisualQualityEvent';
JWPlayerBase.VideoPlayerEventsOnFirstFrameEvent = 'VideoPlayerEventsOnFirstFrameEvent';
JWPlayerBase.AdvertisingEventsOnAdClickEvent = 'AdvertisingEventsOnAdClickEvent';
JWPlayerBase.AdvertisingEventsOnAdCompleteEvent = 'AdvertisingEventsOnAdCompleteEvent';
JWPlayerBase.AdvertisingEventsOnAdSkippedEvent = 'AdvertisingEventsOnAdSkippedEvent';
JWPlayerBase.AdvertisingEventsOnAdErrorEvent = 'AdvertisingEventsOnAdErrorEvent';
JWPlayerBase.AdvertisingEventsOnAdImpressionEvent = 'AdvertisingEventsOnAdImpressionEvent';
JWPlayerBase.AdvertisingEventsOnAdTimeEvent = 'AdvertisingEventsOnAdTimeEvent';
JWPlayerBase.AdvertisingEventsOnAdPauseEvent = 'AdvertisingEventsOnAdPauseEvent';
JWPlayerBase.AdvertisingEventsOnAdPlayEvent = 'AdvertisingEventsOnAdPlayEvent';
JWPlayerBase.AdvertisingEventsOnAdScheduleEvent = 'AdvertisingEventsOnAdScheduleEvent';
JWPlayerBase.AdvertisingEventsOnBeforePlayEvent = 'AdvertisingEventsOnBeforePlayEvent';
JWPlayerBase.AdvertisingEventsOnBeforeCompleteEvent = 'AdvertisingEventsOnBeforeCompleteEvent';


export const srcProperty = new Property({
    name: 'src'
});
srcProperty.register(JWPlayerBase);