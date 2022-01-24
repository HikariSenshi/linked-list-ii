/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
    
    
    let findIntersect = (slowp: ListNode, fastp: ListNode|null): ListNode | null => {
        
        while(fastp!= null && fastp.next!=null) {
            
            slowp = slowp.next
            fastp =  fastp.next.next
            if (slowp == fastp) return slowp;
        
        }
        
        return null;
    
    }
    
    let intersect: ListNode | null = findIntersect(head,head);
    let start: ListNode | null = head;
    
    if(intersect == null) return intersect;
    
    while( intersect != start) intersect = intersect.next, start = start.next;
    
    return start;
    

};
