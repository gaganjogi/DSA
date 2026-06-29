Elastic Block Storage(Virtual hard disk)

This is mainly used when we are having different ec2 instances but need same ebs storage services for read and write and also for backup and also for disaster recovery and also for high availability

EBS keypoints
Region specific both ec2 and ebs should be in same region and zone

redundancy ebs are auto replicated

No data loss occurs at the time of scaling
No need to restart the EC2 instance during scaling

when instance is created automatically ebs is also created
or we can change in advanced mode changes 

create instance
create volume
attach volume to instance
detach volume from instance
delete volume
delete instance

create snapshot 
create volume from snapshot
delete snapshot     

then create instance from snapshot volume

then mount the backup data


after attaching the volume to instance 
first we need to open the file 
[ec2-user@ip-172-31-11-137 ~]$ sudo file -s /dev/xvdk1  - external device storage file system is attached
we need point to be attached
/dev/xvdk1: SGI XFS filesystem data (blksz 4096, inosz 512, v2 dirs)


EBS volumes are block devices, not USB drives. You can't "plug one into another." The way data moves in AWS is:
EBS Volume A  →  EC2 (mount both)  →  EBS Volume B

so create snapshot then volume then create instance (in same region and zone)

sudo mount what where
lsblk command to check the volumes in an instance 
so first attach volume and then mount and 

mount is like a temporary access if u detach from the instance it will goes away so after mount u need to copy to persistent data
 cp -r /mnt/backup/home/ec2-user/data-folder /home/ec2-user/