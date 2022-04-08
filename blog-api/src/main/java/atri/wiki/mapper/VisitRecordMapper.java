package atri.wiki.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import atri.wiki.entity.VisitRecord;

import java.util.List;

/**
 * @Description: 访问记录持久层接口
 * @Author: Naccl
 * @Date: 2021-02-23
 */
@Mapper
@Repository
public interface VisitRecordMapper {
	List<VisitRecord> getVisitRecordListByLimit(Integer limit);

	int saveVisitRecord(VisitRecord visitRecord);
}
