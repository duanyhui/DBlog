package atri.wiki.service;

import org.springframework.scheduling.annotation.Async;
import atri.wiki.entity.LoginLog;

import java.util.List;

public interface LoginLogService {
	List<LoginLog> getLoginLogListByDate(String startDate, String endDate);

	@Async
	void saveLoginLog(LoginLog log);

	void deleteLoginLogById(Long id);
}
