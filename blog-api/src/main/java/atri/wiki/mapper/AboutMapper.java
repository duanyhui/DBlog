package atri.wiki.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import atri.wiki.entity.About;

import java.util.List;

/**
 * @Description: 关于我持久层接口
 * @Author: Naccl
 * @Date: 2020-08-31
 */
@Mapper
@Repository
public interface AboutMapper {
	List<About> getList();

	int updateAbout(String nameEn, String value);

	String getAboutCommentEnabled();
}
