package atri.wiki.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import atri.wiki.entity.CityVisitor;
import atri.wiki.mapper.CityVisitorMapper;
import atri.wiki.service.CityVisitorService;

/**
 * @Description: 城市访客数量统计业务层实现
 * @Author: Naccl
 * @Date: 2021-02-26
 */
@Service
public class CityVisitorServiceImpl implements CityVisitorService {
	@Autowired
	CityVisitorMapper cityVisitorMapper;

	@Override
	public void saveCityVisitor(CityVisitor cityVisitor) {
		cityVisitorMapper.saveCityVisitor(cityVisitor);
	}
}
