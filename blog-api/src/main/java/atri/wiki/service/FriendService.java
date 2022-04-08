package atri.wiki.service;

import atri.wiki.model.dto.Friend;
import atri.wiki.model.vo.FriendInfo;

import java.util.List;

public interface FriendService {
	List<atri.wiki.entity.Friend> getFriendList();

	List<atri.wiki.model.vo.Friend> getFriendVOList();

	void updateFriendPublishedById(Long friendId, Boolean published);

	void saveFriend(atri.wiki.entity.Friend friend);

	void updateFriend(Friend friend);

	void deleteFriend(Long id);

	void updateViewsByNickname(String nickname);

	FriendInfo getFriendInfo(boolean cache, boolean md);

	void updateFriendInfoContent(String content);

	void updateFriendInfoCommentEnabled(Boolean commentEnabled);
}
