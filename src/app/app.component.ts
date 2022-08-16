import { Component, OnInit } from '@angular/core';
import { NodeService } from './node.service';
import { TreeNode } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService],
})
export class AppComponent {
  files1: TreeNode[] = [];

  files2: TreeNode[] = [];

  files3: TreeNode[] = [];

  selectedFile: TreeNode | undefined;

  selectedFiles1: TreeNode | undefined;

  selectedFiles2: TreeNode | undefined;

  title = 'p-tree-select';

  constructor(
    private nodeService: NodeService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.nodeService.getFiles().then((files) => (this.files1 = files));
    this.nodeService.getLazyFiles().then((files) => (this.files2 = files));
    this.nodeService.getFiles().then((files) => (this.files3 = files));
  }

  nodeSelect(event: {node: {label: any;};}) {
    this.messageService.add({
      severity: 'info',
      summary: 'Node Selected',
      detail: event.node.label,
    });
  }

  nodeUnselect(event: {node: {label: any;};}) {
    this.messageService.add({
      severity: 'info',
      summary: 'Node Unselected',
      detail: event.node.label,
    });
  }
}
