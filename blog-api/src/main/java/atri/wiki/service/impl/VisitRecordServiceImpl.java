package atri.wiki.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import atri.wiki.entity.VisitRecord;
import atri.wiki.mapper.VisitRecordMapper;
import atri.wiki.service.VisitRecordService;

/**
 * @Description: 访问记录业务层实现
 * @Author: Naccl
 * @Date: 2021-02-23
 */
@Service
public class VisitRecordServiceImpl implements VisitRecordService {
	@Autowired
	VisitRecordMapper visitRecordMapper;

	@Override
	public void saveVisitRecord(VisitRecord visitRecord) {
		visitRecordMapper.saveVisitRecord(visitRecord);
	}
}
