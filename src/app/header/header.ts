import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ViewportScroller } from '@angular/common'; // 导入 ViewportScroller

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class HeaderComponent {
  constructor(private viewportScroller: ViewportScroller) {} // 注入 ViewportScroller

  /**
   * 平滑滚动到指定ID的元素
   * @param anchor 要滚动到的元素ID
   */
  scrollToAnchor(anchor: string): void {
    // 使用 setTimeout 确保 DOM 渲染完成后再滚动，尤其是在路由变化后
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(anchor);
    }, 0);
  }
}
