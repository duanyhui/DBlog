package atri.wiki.mapper;

import atri.wiki.model.dto.Comment;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import atri.wiki.model.vo.PageComment;

import java.util.List;

/**
 * @Description: 博客评论持久层接口
 * @Author: Naccl
 * @Date: 2020-08-03
 */
@Mapper
@Repository
public interface CommentMapper {
	List<atri.wiki.entity.Comment> getListByPageAndParentCommentId(Integer page, Long blogId, Long parentCommentId);

	List<atri.wiki.entity.Comment> getListByParentCommentId(Long parentCommentId);

	List<PageComment> getPageCommentListByPageAndParentCommentId(Integer page, Long blogId, Long parentCommentId);

	atri.wiki.entity.Comment getCommentById(Long id);

	int updateCommentPublishedById(Long commentId, Boolean published);

	int updateCommentNoticeById(Long commentId, Boolean notice);

	int deleteCommentById(Long commentId);

	int deleteCommentsByBlogId(Long blogId);

	int updateComment(atri.wiki.entity.Comment comment);

	int countByPageAndIsPublished(Integer page, Long blogId, Boolean isPublished);

	int countComment();

	int saveComment(Comment comment);
}
