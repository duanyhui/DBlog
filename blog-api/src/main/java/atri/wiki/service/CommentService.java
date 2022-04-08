package atri.wiki.service;

import atri.wiki.model.dto.Comment;
import atri.wiki.model.vo.PageComment;

import java.util.List;

public interface CommentService {
	List<atri.wiki.entity.Comment> getListByPageAndParentCommentId(Integer page, Long blogId, Long parentCommentId);

	List<PageComment> getPageCommentList(Integer page, Long blogId, Long parentCommentId);

	atri.wiki.entity.Comment getCommentById(Long id);

	void updateCommentPublishedById(Long commentId, Boolean published);

	void updateCommentNoticeById(Long commentId, Boolean notice);

	void deleteCommentById(Long commentId);

	void deleteCommentsByBlogId(Long blogId);

	void updateComment(atri.wiki.entity.Comment comment);

	int countByPageAndIsPublished(Integer page, Long blogId, Boolean isPublished);

	void saveComment(Comment comment);
}
