package atri.wiki.util.upload.channel;

import atri.wiki.util.common.SpringContextUtils;
import atri.wiki.constant.UploadConstants;

/**
 * 文件上传方式
 *
 * @author: Naccl
 * @date: 2022-01-23
 */
public class ChannelFactory {
	/**
	 * 创建文件上传方式
	 *
	 * @param channelName 方式名称
	 * @return
	 */
	public static FileUploadChannel getChannel(String channelName) {
		if (UploadConstants.LOCAL.equalsIgnoreCase(channelName)) {
			return SpringContextUtils.getBean("localChannel", FileUploadChannel.class);
		} else if (UploadConstants.GITHUB.equalsIgnoreCase(channelName)) {
			return SpringContextUtils.getBean("githubChannel", FileUploadChannel.class);
		}
		throw new RuntimeException("Unsupported value in [application.properties]: [upload.channel]");
	}
}
