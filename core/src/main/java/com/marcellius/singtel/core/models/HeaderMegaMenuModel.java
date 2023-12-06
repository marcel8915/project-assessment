package com.marcellius.singtel.core.models;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Default;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

import com.day.cq.commons.Externalizer;
import com.day.cq.commons.jcr.JcrConstants;
import com.day.cq.wcm.api.Page;
import com.marcellius.singtel.core.beans.MenuBean;

/**
 * @author Marcellius
 *
 */
@Model(adaptables = { SlingHttpServletRequest.class, Resource.class })
public class HeaderMegaMenuModel {

	private static final String DEFAULT_NAV_LEVEL = "3";

	@SlingObject
	private SlingHttpServletRequest request;

	@SlingObject
	private Resource resource;

	@SlingObject
	private ResourceResolver resourceResolver;

	@ScriptVariable
	private Page currentPage;

	@ValueMapValue
	@Default(values = "/content/project-assessment/en")
	private String rootPath;

	private List<MenuBean> menu;
	private int navLevel;

	@PostConstruct
	protected void init() {
		menu = new ArrayList<>();

		this.processMenuList();
	}

	private void processMenuList() {
		Resource rootPageRes = resourceResolver.getResource(rootPath);
		ValueMap vMap = rootPageRes.getChild(JcrConstants.JCR_CONTENT).getValueMap();
		navLevel = Integer.parseInt(vMap.getOrDefault("navLevel", DEFAULT_NAV_LEVEL).toString());
		menu = getChildPage(rootPageRes, 1);
	}

	private List<MenuBean> getChildPage(Resource pageRes, int pageLevel) {
		List<MenuBean> list = new ArrayList<>();
		Iterable<Resource> children = pageRes.getChildren();
		Externalizer externalizer = resourceResolver.adaptTo(Externalizer.class);

		for (Resource child : children) {
			if (!child.getName().equalsIgnoreCase(JcrConstants.JCR_CONTENT)
					&& child.getResourceType().equalsIgnoreCase("cq:Page")) {
				ValueMap vMap = child.getChild(JcrConstants.JCR_CONTENT).getValueMap();
				String title = vMap.get(JcrConstants.JCR_TITLE, String.class);
				String pagePath = child.getPath();
				String pageLink = externalizer.absoluteLink(request, request.getScheme(), pagePath).concat(".html");
				boolean isHideInNav = Boolean.parseBoolean(vMap.get("hideInNav", "false"));
				boolean isHideChildInNav = Boolean.parseBoolean(vMap.get("hideChildInNav", "false"));
				boolean isCurrentPage = pageLevel == 1 && currentPage.getPath().startsWith(pagePath);

				if (!isHideInNav) {
					MenuBean bean = new MenuBean(title, pagePath, pageLink, isCurrentPage, pageLevel);
					if (pageLevel < navLevel && !isHideChildInNav) {
						List<MenuBean> childList = getChildPage(child, pageLevel + 1);
						bean.setChildMenu(childList);
					}

					list.add(bean);
				}
			}
		}

		return list;
	}

	public List<MenuBean> getMenu() {
		return menu;
	}
}
