from django.core.management.base import BaseCommand
from django.conf import settings
from djongo import models

from octofit_tracker.models import User, Team, Activity, Leaderboard, Workout

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **options):
        # Delete existing data
        User.objects.all().delete()
        Team.objects.all().delete()
        Activity.objects.all().delete()
        Leaderboard.objects.all().delete()
        Workout.objects.all().delete()

        # Create teams
        marvel = Team.objects.create(name='Marvel')
        dc = Team.objects.create(name='DC')

        # Create users
        users = [
            User(email='ironman@marvel.com', name='Iron Man', team=marvel),
            User(email='captain@marvel.com', name='Captain America', team=marvel),
            User(email='spiderman@marvel.com', name='Spider-Man', team=marvel),
            User(email='batman@dc.com', name='Batman', team=dc),
            User(email='superman@dc.com', name='Superman', team=dc),
            User(email='wonderwoman@dc.com', name='Wonder Woman', team=dc),
        ]
        User.objects.bulk_create(users)

        # Create activities
        activities = [
            Activity(user=users[0], type='Running', duration=30),
            Activity(user=users[1], type='Cycling', duration=45),
            Activity(user=users[2], type='Swimming', duration=60),
            Activity(user=users[3], type='Running', duration=25),
            Activity(user=users[4], type='Cycling', duration=50),
            Activity(user=users[5], type='Swimming', duration=40),
        ]
        Activity.objects.bulk_create(activities)

        # Create workouts
        workouts = [
            Workout(user=users[0], description='Chest day'),
            Workout(user=users[1], description='Leg day'),
            Workout(user=users[2], description='Cardio'),
            Workout(user=users[3], description='Strength'),
            Workout(user=users[4], description='Endurance'),
            Workout(user=users[5], description='Flexibility'),
        ]
        Workout.objects.bulk_create(workouts)

        # Create leaderboard
        Leaderboard.objects.create(team=marvel, points=135)
        Leaderboard.objects.create(team=dc, points=115)

        self.stdout.write(self.style.SUCCESS('octofit_db populated with test data'))
